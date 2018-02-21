import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button, Menu, Icon } from 'semantic-ui-react';

const Tournaments = ({ onSelect }) => (
  <Segment.Group>
    <Segment>
      <Header size="medium">
        Tournaments
      </Header>
      <Button>
        <Icon name="plus" />
        New
      </Button>
    </Segment>
    <Segment>
      <Menu.Item>
        Tournament Name
        <Button onClick={onSelect} size="small">Play</Button>
        Tournament status: created/started/finished
      </Menu.Item>
      <Menu.Item>
        Tournament Name
        <Button size="small">Play</Button>
        Tournament status: created/started/finished
      </Menu.Item>
    </Segment>
  </Segment.Group>
);

Tournaments.propTypes = {
  onSelect: PropTypes.func,
};

export default Tournaments;
