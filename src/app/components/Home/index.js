import React, { Component } from 'react';
import { Segment, Header, Container, Grid } from 'semantic-ui-react';
import Tournaments from '../Tournaments';
import Play from '../Play';

import './style.css';

class Home extends Component {
  state = {
    tournament: false,
  }

  onSelect = (e) => {
    const { tournament } = this.state;

    this.setState({
      tournament: !tournament,
    });
  }

  render() {
    const { tournament } = this.state;

    return (
      <Container styleName="home">
        <Segment>
          <Header textAlign="left" size="huge">Game Manager</Header>
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} computer={6}>
              <Tournaments onSelect={this.onSelect} />
            </Grid.Column>
            <Grid.Column mobile={16} computer={10}>
              <Play tournament={tournament} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;
