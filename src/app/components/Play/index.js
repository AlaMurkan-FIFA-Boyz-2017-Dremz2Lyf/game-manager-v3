import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Header, Message } from 'semantic-ui-react';
import Game from '../Game';
import games from '../Game/tests/fixtures';

const Play = ({ tournament }) => (
  <Container>
    <Segment.Group>
      <Segment clearing>
        <Header icon="soccer" content="Tournament Name Here" size="medium" />
      </Segment>
      { !tournament ? (
        <Message>
          <Message.Header>
            No Competition Selected
          </Message.Header>
          <p>
            Please select and existing or create a new Competition on the left.
          </p>
        </Message>
      ) : (
        games.map(game => (
          <Game key={game.id} {...game} />
        ))
      )}
    </Segment.Group>
  </Container>
);

Play.propTypes = {
  tournament: PropTypes.bool,
};

export default Play;
