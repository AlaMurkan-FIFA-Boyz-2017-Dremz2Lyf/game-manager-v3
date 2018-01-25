import React from 'react';
import { Segment, Header, Button, Item, Icon } from 'semantic-ui-react';

const Tournaments = () => (
  <Segment.Group>
    <Segment clearing>
      <Header size="medium">
        Tournaments
      </Header>
      <Button floated="right">
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
              <Button size="small">PLAY!</Button>
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
              <Button size="small">PLAY!</Button>
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

export default Tournaments;
