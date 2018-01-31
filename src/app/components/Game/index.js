import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Container, Grid, Label, Image } from 'semantic-ui-react';
import GameForm from '../GameForm';

const Game = ({ status, home = {}, away = {} }) => {
  console.log({ status, home, away });
  return (
    <Segment>
      <Container>
        <GameForm status={status} />
        <Segment.Group size="small" horizontal>
          <Segment textAlign="left">
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={16} computer={10}>
                  <Header>
                    {home.player.name}
                  </Header>
                  {home.team}
                  <Label>
                  4-3-2
                  </Label>
                </Grid.Column>
                <Grid.Column only="computer tablet" width={6}>
                  <Image
                    floated="right"
                    size="mini"
                    src={home.team_url}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment textAlign="right">
            <Grid>
              <Grid.Row>
                <Grid.Column only="computer tablet" width={6}>
                  <Image
                    size="mini"
                    src={away.team_url}
                  />
                </Grid.Column>
                <Grid.Column mobile={16} computer={10}>
                  <Header>
                    {away.player.name}
                  </Header>
                  {away.team}
                  <Label>
                  0-3-5
                  </Label>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment.Group>
      </Container>
    </Segment>
  );
};

Game.propTypes = {
  status: PropTypes.string,
  home: PropTypes.object,
  away: PropTypes.object,
};

export default Game;
