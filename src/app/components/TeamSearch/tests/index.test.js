import React from 'react';
import { shallow } from 'enzyme';

import TeamSearch from '../index';
import { competitions, premTeams } from './fixtures';

describe('<TeamSearch />', () => {
  let wrapper;
  let instance;
  let getCompetitionsMock;
  let getTeamsMock;

  beforeEach(() => {
    getCompetitionsMock = jest.fn(() => Promise.resolve(competitions));
    getTeamsMock = jest.fn(() => Promise.resolve({ teams: premTeams }));
    wrapper = shallow(
      <TeamSearch getCompetitions={getCompetitionsMock} getTeams={getTeamsMock} />,
    );
    instance = wrapper.instance();
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('[name="homeClub"]').exists()).toBe(false);
    expect(wrapper.find('[name="awayClub"]').exists()).toBe(false);
  });

  it('should match the snapshot with a home competition selected', () => {
    wrapper.setState({ homeClubs: premTeams });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('[name="homeClub"]').exists()).toBe(true);
  });

  it('should match the snapshot with a home competition selected', () => {
    wrapper.setState({ awayClubs: premTeams });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('[name="awayClub"]').exists()).toBe(true);
  });

  it('should call for the competitions in componentWillMount', () => (
    instance.componentWillMount().then((comps) => {
      expect(wrapper.state('competitions')).toEqual(competitions);
      expect(wrapper.state('loading')).toBe(false);
    })
  ));

  describe('onCompetitionChange', () => {
    it('should call getTeams', () => (
      instance.onCompetitionChange(null, { name: 'home', value: 445 }).then(() => {
        expect(getTeamsMock).toHaveBeenCalled();
        expect(getTeamsMock).toHaveBeenCalledWith(445);
        expect(wrapper.state('homeClubs')).toEqual(premTeams);
        expect(wrapper.state('loading')).toEqual(false);
      })
    ));
  });

  describe('onClubChange', () => {
    const target = {
      name: 'homeClub',
      value: 'Liverpool FC',
      text: 'Liverpool FC',
      key: 'https://best.team.in.the.world',
    };
    const expected = { ...target };
    delete expected.name;
    it('should call add the selected club to state', () => {
      instance.onClubChange(null, target);
      expect(wrapper.state('homeClub')).toEqual(expected);
    });
  });

  describe('fetchComps', () => {
    it('should call getCompetitions from props', () => (
      instance.fetchComps(null, { name: 'home', value: 445 }).then(() => {
        expect(getCompetitionsMock).toHaveBeenCalled();
      })
    ));
  });

  describe('mapClubs', () => {
    it('should take an array of clubs and return the correct values', () => {
      const result = instance.mapClubs(premTeams);
      const expected = {
        key: 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg',
        text: 'Liverpool FC',
        value: 'Liverpool FC',
      };
      expect(result[3]).toEqual(expected);
    });
  });
});
