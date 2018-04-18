import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Container, Button, Item, Grid } from 'semantic-ui-react';

const Tournaments = ({ onSelect }) => (
  <Container text>
    <Segment.Group>
      <Segment>
        <Grid columns={2} centered>
          <Grid.Row>
            <Grid.Column floated="left" textAlign="center">
              <Header icon="trophy" content="Tournaments" />
            </Grid.Column>
            <Grid.Column floated="right" textAlign="right">
              <Button icon="plus" content="New" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>
                Super great Tournament
              </Item.Header>
              <Button floated="right" onClick={onSelect} size="small">Play</Button>
              <Item.Extra>
                Tournament status: started
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header>
                Less great Tournament
              </Item.Header>
              <Button floated="right" size="small">Play</Button>
              <Item.Extra>
                Tournament status: created
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  </Container>
);

Tournaments.propTypes = {
  onSelect: PropTypes.func,
};

export default Tournaments;
