import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Message } from 'semantic-ui-react';
import Game from '../Game';

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
      [<Game status="created" />,
        <Game status="started" />]
    )}
  </Segment.Group>
);

Play.propTypes = {
  tournament: PropTypes.bool,
};

export default Play;
