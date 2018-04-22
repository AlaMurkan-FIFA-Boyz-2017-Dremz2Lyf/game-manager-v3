import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Header, Message, Button, Modal } from 'semantic-ui-react';

class CreateTournament extends PureComponent {
  static propTypes = {
    tournament: PropTypes.bool,
  }

  state = {
    modalOpen: false,
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  }

  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  }

  render() {
    const { modalOpen } = this.state;

    return (
      <Modal
        open={modalOpen}
        onOpen={this.openModal}
        onClose={this.closeModal}
        trigger={<Button icon="plus" content="New" />}
        basic
        size="small"
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Default Profile Image</Header>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default CreateTournament;
