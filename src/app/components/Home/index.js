import React, { Component } from 'react';
import { Segment, Header, Menu } from 'semantic-ui-react';
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
        <Header textAlign="left" size="huge">Game Manager</Header>
        <Menu inverted vertical fixed="left">
          <Tournaments onSelect={this.onSelect} />
        </Menu>
        <Segment basic>
          <Play tournament={tournament} />
        </Segment>
      </div>
    );
  }
}

export default Home;
