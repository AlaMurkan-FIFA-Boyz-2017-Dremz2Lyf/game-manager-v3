import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Message } from 'semantic-ui-react';
import Game from '../Game';
import { games } from '../../mocks';

const Play = ({ tournament }) => (
  <Segment.Group>
    <Segment clearing>
      <Header size="medium">
        Play
      </Header>
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
);

Play.propTypes = {
  tournament: PropTypes.bool,
};

export default Play;
