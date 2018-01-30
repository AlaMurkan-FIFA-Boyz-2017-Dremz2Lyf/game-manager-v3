import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Progress, Message } from 'semantic-ui-react';

import Tesseract from 'tesseract.js';

const whitelist = 'AYRSTPOTFIC%0123456789hotsnfargjetiwckluyd ';

class ImageReader extends PureComponent {
  static propTypes = {
    images: PropTypes.array,
  }
  state = {
    statsPercent: 0,
    scorePercent: 0,
    results: null,
  }

  tesseractJob = Tesseract.create({
    workerPath: 'https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/worker.js',
    langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
  });

  errorMessage = 'Welp, something went wrong. Tell Scott to fix his crap.'

  readImages = (images) => {
    const promises = images.map((image) => {
      console.log({ image });
      return Promise.resolve(this.tesseractJob.recognize(image, {
        lang: 'eng',
        tessedit_char_whitelist: whitelist,
      }).progress(progress => console.log({ progress })).catch((error) => {
        this.setState({ error });
      }));
    });

    return Promise.all(promises).then((results) => {
      const final = results.map(({ lines }) => lines.map(({ text }) => text));
      this.tesseractJob.terminate();
      return final;
    }).then((results) => {
      this.setState({
        results,
      });
    });
  }

  render() {
    const { statsPercent, scorePercent, results, error } = this.state;
    const { images } = this.props;
    if (images.length === 2 && !results) {
      this.readImages(images);
    }

    return (
      <Segment basic>
        <Message color="teal">
          <Message.Header>
            Processing Image
          </Message.Header>
        </Message>
        {
          error ? (
            <Message color="red" header="Oops!" content={this.errorMessage} />
          ) : (
            <Segment basic>
              <p>{results}</p>
              <Progress percent={scorePercent}>
                Processing Score
              </Progress>
              <Progress percent={statsPercent}>
                Processing Stats
              </Progress>
            </Segment>
          )
        }
      </Segment>
    );
  }
}

export default ImageReader;
