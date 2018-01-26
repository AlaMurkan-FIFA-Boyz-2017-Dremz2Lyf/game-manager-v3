import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Container, Grid, Label, Image } from 'semantic-ui-react';
import GameForm from '../GameForm';

const Game = ({ status }) => (
  status === 'started' ? (
    <Segment>
      <Container>
        <GameForm status={status} />
        <Segment.Group size="small" horizontal>
          <Segment textAlign="left">
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={16} computer={10}>
                  <Header>
                  Scott
                  </Header>
                Tottenham Hotspur
                  <Label>
                  4-3-2
                  </Label>
                </Grid.Column>
                <Grid.Column only="computer tablet" width={6}>
                  <Image
                    floated="right"
                    size="mini"
                    src="http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg"
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
                    src="http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
                  />
                </Grid.Column>
                <Grid.Column mobile={16} computer={10}>
                  <Header>
                  Agustin
                  </Header>
                  Manchester United FC
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
  ) : (
    <Segment>
      <Container>
        <GameForm status={status} />
        <Segment.Group size="small" horizontal>
          <Segment compact textAlign="left">
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={16} computer={10}>
                  <Header>
                  Scott
                  </Header>
                  <Label>
                  4-3-2
                  </Label>
                </Grid.Column>
                <Grid.Column only="computer tablet" width={6}>
                  <Image
                    floated="right"
                    size="mini"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment compact textAlign="right">
            <Grid>
              <Grid.Row>
                <Grid.Column only="computer tablet" width={6}>
                  <Image
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column mobile={16} computer={10}>
                  <Header>
                  Agustin
                  </Header>
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
  )
);

Game.propTypes = {
  status: PropTypes.string,
};

export default Game;
