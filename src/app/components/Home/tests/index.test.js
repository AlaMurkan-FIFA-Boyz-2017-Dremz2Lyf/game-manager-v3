import { shallow } from 'enzyme';
import React from 'react';

import Home from '../index';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it('should match snapshot without a tournament', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with a tournament', () => {
    wrapper.setState({ tournament: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an onSelect method that changes state', () => {
    expect(wrapper.state('tournament')).toBe(false);
    wrapper.instance().onSelect();
    expect(wrapper.state('tournament')).toBe(true);
  });
});
