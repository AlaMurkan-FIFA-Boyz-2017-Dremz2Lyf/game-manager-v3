import { shallow } from 'enzyme';
import React from 'react';

import Play from '../index';

describe('<Play />', () => {
  it('should render', () => {
    const wrapper = shallow(<Play />);
    expect(wrapper).toBeDefined();
  });
});
