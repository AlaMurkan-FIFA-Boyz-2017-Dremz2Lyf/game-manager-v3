import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button, Item, Icon } from 'semantic-ui-react';

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
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>
              Tournament Name
            </Item.Header>
            <Item.Description>
              <Button onClick={onSelect} size="small">Play</Button>
            </Item.Description>
            <Item.Extra>
              Tournament status: created/started/finished
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header>
              Tournament Name
            </Item.Header>
            <Item.Description>
              <Button size="small">Play</Button>
            </Item.Description>
            <Item.Extra>
              Tournament status: created/started/finished
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  </Segment.Group>
);

Tournaments.propTypes = {
  onSelect: PropTypes.func,
};

export default Tournaments;
