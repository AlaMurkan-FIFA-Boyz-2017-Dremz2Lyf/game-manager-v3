import React, { Component } from 'react';
import { Segment, Button, Header, Sidebar, Grid } from 'semantic-ui-react';
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
      <div styleName="home">
        <Segment>
          <Grid basic="true" horizontal="true">
            <Grid.Row>
              <Grid.Column width={2}>
                { tournament ? <Button icon="chevron left" onClick={this.onSelect} /> : null }
              </Grid.Column>
              <Grid.Column width={12}>
                <Header textAlign="center" size="large">Game Manager</Header>
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
          </Grid>
        </Segment>
        <Sidebar.Pushable as={Segment} styleName="sidebar-pusher" basic>
          <Sidebar
            visible={tournament}
            animation="overlay"
            direction="right"
            styleName="sidebar"
          >
            <Play tournament={tournament} />
          </Sidebar>
          <Sidebar.Pusher>
            <Tournaments onSelect={this.onSelect} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Home;
