import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Progress, Message, Header } from 'semantic-ui-react';
import { combineResults } from '../../utilities/index';


const whitelist = 'AYRSTPOTFIC%0123456789hotsnfargjetiwckluyd ';
const STATUS_CHECK = 'recognizing text';

class ImageReader extends PureComponent {
  static propTypes = {
    images: PropTypes.object,
    onResults: PropTypes.func,
  }

  constructor({ processer }) {
    super();

    this.tesseractJob = processer.create({
      workerPath: 'https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/worker.js',
      langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
    });

    this.state = {
      statsPercent: 0,
      scorePercent: 0,
      results: null,
      processing: false,
    };
  }

  componentDidMount() {
    const { images } = this.props;

    if (images && images.score && images.stats) {
      this.readImages(images);
    } else {
      this.showError();
    }
  }

  showError = () => {
    this.setState({
      error: 'Looks like we didn\'t find the any results. Please try again.',
    });
  }

  errorMessage = 'Welp, something went wrong. Tell Scott to fix his crap.'

  readImages(images) {
    const { onResults } = this.props;

    this.setState({ processing: true });

    const promises = Object.keys(images).map(type =>
      Promise.resolve(this.tesseractJob.recognize(images[type], {
        lang: 'eng',
        tessedit_char_whitelist: whitelist,
      }).progress(({ status, progress }) => {
        /* istanbul ignore else */
        if (status === STATUS_CHECK) {
          const stateKey = `${type}Percent`;
          const percentage = Math.floor(progress * 100);
          this.setState({
            [stateKey]: percentage,
          });
        }
      }).catch((error) => {
        this.setState({ error: this.errorMessage });
      })),
    );

    return Promise.all(promises).then((results) => {
      const final = results.map(({ lines }) => lines.map(({ text }) => text));
      this.tesseractJob.terminate();
      return final;
    }).then((result) => {
      onResults(combineResults(result));
      return result;
    });
  }

  render() {
    const { statsPercent, scorePercent, error } = this.state;

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
              <Progress progress="percent" color="teal" percent={scorePercent}>
                <Header color="grey" size="small">Processing Score</Header>
              </Progress>
              <Progress progress="percent" color="teal" percent={statsPercent}>
                <Header color="grey" size="small">Processing Stats</Header>
              </Progress>
            </Segment>
          )
        }
      </Segment>
    );
  }
}

export default ImageReader;
