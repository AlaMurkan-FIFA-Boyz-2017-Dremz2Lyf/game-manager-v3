import React from 'react';
import { shallow } from 'enzyme';
import fetch from 'node-fetch';

import TeamSearch from '../index';
import { competitions, premTeams } from './fixtures';

describe('<TeamSearch />', () => {
  const wrapper = shallow(<TeamSearch />);
  fetch.mockReponse(JSON.stringify({ statusCode: 200, json: () => competitions }));

  beforeEach(() => {
    fetch.reset();
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call for the competitions in componentWillMount', () => {
    wrapper.instance().componentWillMount().then((comps) => {
      console.log({ comps });
      expect(wrapper.state('competitions')).toEqual(competitions);
      expect(wrapper.state('loading')).toBe(false);
    });
  });
});
