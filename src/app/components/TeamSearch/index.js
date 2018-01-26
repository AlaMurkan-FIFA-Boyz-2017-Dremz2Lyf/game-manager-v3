import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Select, Loader, Segment, Dimmer } from 'semantic-ui-react';

const baseUrl = 'http://api.football-data.org/v1/competitions/';
const headers = new Headers({
  'X-Auth-Token': '1627141e9f1f40f4a67aae663f2e4029',
});
const options = {
  method: 'GET',
  headers,
  mode: 'cors',
};

const competitionsMap = {
  'Championship 2017/18': 'English Championship 2017/2018',
  'League One 2017/18': 'English League One 2017/2018',
  'League Two 2017/18': 'English League Two 2017/2018',
  'Primera Division 2017': 'La Liga 2017/2018',
};

class TeamSearch extends PureComponent {
  state = {
    loading: true,
    competitions: [],
    homeClubs: [],
    awayClubs: [],
    homeClub: null,
    awayClub: null,
  }

  componentWillMount() {
    fetch(`${baseUrl}?season=2017`, options).then(res => res.json()).then((competitions) => {
      this.setState({
        competitions,
        loading: false,
      });
    }).catch((error) => { throw error; });
  }

  onCompetitionChange = (_, { name, value }) => {
    const clubKey = `${name}Clubs`;
    this.setState({ loading: true });
    fetch(`${baseUrl}${value}/teams`, options).then(res => res.json()).then((clubs) => {
      this.setState({
        [clubKey]: clubs.teams,
        loading: false,
      });
    });
  }

  onClubChange = (_, target) => {
    const { name, value, text, key } = target;
    this.setState({ loading: true });

    this.setState({
      [name]: {
        value,
        text,
        key,
      },
      loading: false,
    });
  }

  mapCompName = name => (
    competitionsMap[name] ? competitionsMap[name] : name
  )

  render() {
    const { competitions, homeClubs, awayClubs, loading } = this.state;
    const competitionOptions = competitions.map(({ id, caption }) => ({
      key: id,
      value: id,
      text: this.mapCompName(caption),
    }));
    const homeClubOptions = homeClubs.map((club) => {
      const { name, crestUrl } = club;
      return {
        key: crestUrl,
        value: name,
        text: name,
      };
    });
    const awayClubOptions = awayClubs.map(({ id, name, crestUrl }) => ({
      key: crestUrl,
      value: name,
      text: name,
    }));

    return (
      <Segment basic>
        <Dimmer active={loading}>
          <Loader />
        </Dimmer>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header color="grey" content="Home" />
              <Select name="home" onChange={this.onCompetitionChange} placeholder="Select a Competition" options={competitionOptions} />
              {
                homeClubOptions.length ? (
                  <Select
                    name="homeClub"
                    placeholder="Select a Club"
                    onChange={this.onClubChange}
                    options={homeClubOptions}
                  />
                ) : null
              }
            </Grid.Column>
            <Grid.Column width={8}>
              <Header color="grey" content="Away" />
              <Select name="away" onChange={this.onCompetitionChange} placeholder="Select a Competition" options={competitionOptions} />
              {
                awayClubOptions.length ? (
                  <Select
                    name="awayClub"
                    placeholder="Select a Club"
                    onChange={this.onClubChange}
                    options={awayClubOptions}
                  />
                ) : null
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

TeamSearch.propTypes = {};

export default TeamSearch;
