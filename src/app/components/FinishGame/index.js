import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Image, Header, Grid, Step, Icon, Button, Modal } from 'semantic-ui-react';
// import randomID from 'random-id';
import RenderStep from './RenderStep';
// import { combineResults } from '../../utilities';

// const

class FinishGame extends PureComponent {
  state = {
    loading: false,
    searchTerm: '',
    step: 0,
    images: [],
    imageSource: '',
  }


  componentDidMount() {
    this.generateHashtag();
  }

  onSearchChange = (_, { searchTerm }) => {
    this.setState({
      searchTerm,
    });
  }

  HASHTAG_LENGTH = 10;
  baseUrl = 'https://9lu2sgi14m.execute-api.us-east-1.amazonaws.com/dev/ocr?q=';

  fetchImages = () => {
    const { searchTerm } = this.state;

    this.setState({ loading: true });

    fetch(`${this.baseUrl}${searchTerm}`)
      .then(response => response.json())
      .then((results) => {
        const { cropped, imageSource: { imageUrl: imageSource } } = results;

        this.setState({
          imageSource,
          images: cropped,
        }, () => {
          this.nextStep();
        });
      });
  }

  nextStep = () => {
    const nextStep = this.state.step + 1;
    this.setState({
      step: nextStep,
    });
  }

  generateHashtag = () => {
    // NOTE: for testing we use a locked tag. add this back in when ready
    // const searchTerm = randomID(HASHTAG_LENGTH);
    const searchTerm = '656liv4manure0';
    this.setState({
      searchTerm,
    });
  }


  render() {
    const { step, imageSource, searchTerm, loading, images } = this.state;
    const { closeModal } = this.props;
    const stepProps = {
      step,
      imageSource,
      searchTerm,
      loading,
      images,
      fetchImages: this.fetchImages,
    };

    return (
      <Segment basic>
        <Modal.Content>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column mobile={16} computer={6}>
                <Step.Group vertical size="small">
                  <Step
                    completed={step > 0}
                    active={step === 0}
                  >
                    <Icon name="info" />
                    <Step.Content>
                      <Step.Title>Directions</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step
                    completed={step > 1}
                    active={step === 1}
                  >
                    <Icon name="hashtag" />
                    <Step.Content>
                      <Step.Title>Hashtag</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step
                    completed={step > 2}
                    active={step === 2}
                  >
                    <Icon name="twitter square" />
                    <Step.Content>
                      <Step.Title>Searching</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step
                    completed={step > 3}
                    active={step === 3}
                  >
                    <Icon name="check" />
                    <Step.Content>
                      <Step.Title>Processing Results</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step
                    completed={step > 4}
                    active={step === 4}
                  >
                    <Icon name="check" />
                    <Step.Content>
                      <Step.Title>Confirm Results</Step.Title>
                    </Step.Content>
                  </Step>
                </Step.Group>
              </Grid.Column>
              <Grid.Column mobile={16} computer={10}>
                <RenderStep {...stepProps} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Segment basic floated="right">
          <Modal.Actions>
            <Button basic color="red" inverted onClick={closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
            <Button color="green" inverted onClick={this.nextStep}>
              {step === 3 ? <Icon name="checkmark" /> : null}
              {step === 3 ? 'Verify' : 'Next'}
            </Button>
          </Modal.Actions>
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
FinishGame.propTypes = {
  tournament: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default FinishGame;
