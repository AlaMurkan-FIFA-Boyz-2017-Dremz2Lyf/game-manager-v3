import { shallow } from 'enzyme';
import React from 'react';

import GameForm from '../index';

describe('<GameForm />', () => {
  it('should render', () => {
    const wrapper = shallow(<GameForm />);
    expect(wrapper).toBeDefined();
  });
});
