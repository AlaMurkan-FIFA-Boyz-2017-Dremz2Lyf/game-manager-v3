import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Item } from 'semantic-ui-react';
import GameForm from '../GameForm';
import './styles.css';

const Game = ({ status, home, away }) => (
  <Segment>
    <GameForm status={status} />
    <Item.Group>
      <Item styleName="player">
        <Item.Content>
          <Item.Header>
            {home.player.name}
          </Item.Header>
          {
            home.team ? (
              <Item.Description>
                {home.team}
              </Item.Description>
            ) : null
          }
        </Item.Content>
      </Item>
      <Item styleName="player">
        <Item.Content>
          <Item.Header>
            {away.player.name}
          </Item.Header>
          {
            away.team ? (
              <Item.Description>
                {away.team}
              </Item.Description>
            ) : null
          }
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
);

Game.propTypes = {
  status: PropTypes.string,
  home: PropTypes.object.isRequired,
  away: PropTypes.object.isRequired,
};

export default Game;
