import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tesseract from 'tesseract.js';
import { Segment, Responsive, Image, Header, Grid, Step, Icon, Button, Modal } from 'semantic-ui-react';
// import randomID from 'random-id';
import RenderStep from './RenderStep';

class FinishGame extends PureComponent {
  static propTypes = {
    imageFetcher: PropTypes.func,
    tournament: PropTypes.bool,
    closeModal: PropTypes.func,
  }

  state = {
    loading: false,
    hashtag: '',
    step: 0,
    images: null,
    imageSource: '',
  }

  componentDidMount() {
    this.generateHashtag();
  }

  onResults = (results) => {
    this.setState({
      results,
      loading: false,
      step: this.state.step + 1,
    });
  }

  HASHTAG_LENGTH = 10;
  baseUrl = process.env.LAMBDA_URL;

  fetchImages = () => {
    const { hashtag } = this.state;
    const { imageFetcher } = this.props;

    this.setState({ loading: true });

    return imageFetcher(this.baseUrl, hashtag).then((results) => {
      const { images, imageSource } = results;

      this.setState({
        loading: false,
        imageSource,
        images,
      }, () => {
        this.nextStep();
      });
    });
  }

  nextStep = () => {
    const nextStep = this.state.step + 1;
    if (nextStep < 5) {
      this.setState({
        step: nextStep,
      });
    } else {
      // TODO: submit mutation here.
      this.closeModal();
    }
  }

  closeModal = () => {
    const { closeModal } = this.props;
    closeModal();
  }

  generateHashtag = () => {
    // NOTE: for testing we use a locked tag. add this back in when ready
    // const hashtag = randomID(this.HASHTAG_LENGTH);
    const hashtag = '656liv4manure0';
    this.setState({
      hashtag,
    });
  }

  renderButtons = () => {
    const { step } = this.state;
    const disabled = step === 2 || step === 3;
    return (
      <Modal.Actions>
        <Button basic color="red" inverted onClick={this.closeModal}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button disabled={disabled} color="green" inverted onClick={this.nextStep}>
          {step === 4 ? <Icon name="checkmark" /> : null}
          {step === 4 ? 'Verify' : 'Next'}
        </Button>
      </Modal.Actions>
    );
  }

  render() {
    const { step, imageSource, hashtag, loading, images, results } = this.state;

    const stepProps = {
      processer: Tesseract,
      results,
      step,
      imageSource,
      hashtag,
      loading,
      images,
      fetchImages: this.fetchImages,
      onResults: this.onResults,
    };

    return (
      <Segment basic>
        <Modal.Content>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column verticalAlign="middle" mobile={4} computer={6}>
                <Step.Group vertical size="mini">
                  <Step
                    completed={step > 0}
                    active={step === 0}
                  >
                    <Icon size="small" name="info" />
                    <Responsive as={Step.Content} {...Responsive.onlyComputer}>
                      <Step.Title>Directions</Step.Title>
                    </Responsive>
                  </Step>
                  <Step
                    completed={step > 1}
                    active={step === 1}
                  >
                    <Icon size="small" name="hashtag" />
                    <Responsive as={Step.Content} {...Responsive.onlyComputer}>
                      <Step.Title>Hashtag</Step.Title>
                    </Responsive>
                  </Step>
                  <Step
                    completed={step > 2}
                    active={step === 2}
                  >
                    <Icon size="small" name="twitter" />
                    <Responsive as={Step.Content} {...Responsive.onlyComputer}>
                      <Step.Title>Searching</Step.Title>
                    </Responsive>
                  </Step>
                  <Step
                    completed={step > 3}
                    active={step === 3}
                  >
                    <Icon size="small" name="spinner" loading={step ===3} />
                    <Responsive as={Step.Content} {...Responsive.onlyComputer}>
                      <Step.Title>Processing</Step.Title>
                    </Responsive>
                  </Step>
                  <Step
                    completed={step > 4}
                    active={step === 4}
                  >
                    <Icon size="small" name="pointing down" />
                    <Responsive as={Step.Content} {...Responsive.onlyComputer}>
                      <Step.Title>Confirm</Step.Title>
                    </Responsive>
                  </Step>
                </Step.Group>
              </Grid.Column>
              <Grid.Column mobile={12} computer={10}>
                <RenderStep {...stepProps} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Segment basic floated="right">
          {this.renderButtons()}
        </Segment>
        <Header color="teal" content="Results" />
        <Image
          src={imageSource}
          fluid
        />
      </Segment>
    );
  }
}

export default FinishGame;
