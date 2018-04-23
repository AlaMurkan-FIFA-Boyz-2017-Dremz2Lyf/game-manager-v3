import React from 'react';
import { shallow } from 'enzyme';

import Directions from '../Directions';

describe('Directions Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Directions />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
