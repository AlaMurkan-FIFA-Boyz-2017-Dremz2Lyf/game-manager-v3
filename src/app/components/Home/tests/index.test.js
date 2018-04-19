import { shallow } from 'enzyme';
import React from 'react';

import Home from '../index';

describe('<Home />', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeDefined();
    const Tournaments = wrapper.find('Tournaments');
    const Play = wrapper.find('Play');
    expect(Tournaments).toBeDefined();
    expect(Play).toBeDefined();
  });
});
