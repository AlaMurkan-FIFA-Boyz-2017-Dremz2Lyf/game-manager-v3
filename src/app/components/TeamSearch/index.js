import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Button, Icon, Modal, Select, Loader, Segment, Dimmer } from 'semantic-ui-react';

const competitionsMap = {
  'Championship 2017/18': 'English Championship 2017/2018',
  'League One 2017/18': 'English League One 2017/2018',
  'League Two 2017/18': 'English League Two 2017/2018',
  'Primera Division 2017': 'La Liga 2017/2018',
};

class TeamSearch extends PureComponent {
  static propTypes = {
    closeModal: PropTypes.func,
    getCompetitions: PropTypes.func,
    getTeams: PropTypes.func,
  };

  state = {
    loading: true,
    competitions: [],
    homeClubs: [],
    awayClubs: [],
    homeClub: null,
    awayClub: null,
  }

  componentWillMount() {
    return this.fetchComps();
  }

  onCompetitionChange = (_, { name, value }) => {
    const clubKey = `${name}Clubs`;
    this.setState({ loading: true });
    return this.props.getTeams(value)
      .then((clubs) => {
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

  fetchComps() {
    return this.props.getCompetitions()
      .then((competitions) => {
        this.setState({
          competitions,
          loading: false,
        });
        return competitions;
      });
  }

  mapClubs = clubs => clubs.map(({ name, crestUrl }) => ({
    key: crestUrl,
    value: name,
    text: name,
  }));

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
    const homeClubOptions = this.mapClubs(homeClubs);
    const awayClubOptions = this.mapClubs(awayClubs);

    return (
      <Segment basic>
        <Modal.Content>
          <Dimmer active={loading}>
            <Loader />
          </Dimmer>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header color="teal" content="Home" />
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
                <Header color="teal" content="Away" />
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
        </Modal.Content>
        <Segment basic floated="right">
          <Modal.Actions>
            <Button basic color="red" inverted>
              <Icon name="remove" /> Cancel
            </Button>
            <Button color="green" inverted>
              <Icon name="checkmark" /> Confirm
            </Button>
          </Modal.Actions>
        </Segment>
      </Segment>
    );
  }
}

export default TeamSearch;
