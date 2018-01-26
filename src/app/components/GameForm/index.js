import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Icon, Modal } from 'semantic-ui-react';
import TeamSearch from '../TeamSearch';

const GameForm = ({ status }) => (
  !(status === 'started') ? (
    <Modal trigger={<Button fluid>Start</Button>} basic size="small">
      <Header icon="soccer" content="Select the teams to play with" />
      <Modal.Content>
        <TeamSearch />
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" inverted>
          <Icon name="checkmark" /> Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  ) : (
    <Modal trigger={<Button primary fluid>Finish this Game</Button>} basic size="small">
      <Header icon="archive" content="Archive Old Messages" />
      <Modal.Content>
        <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
);

GameForm.propTypes = {
  status: PropTypes.string,
};

export default GameForm;
