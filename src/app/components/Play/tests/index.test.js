import { shallow } from 'enzyme';
import React from 'react';

import Play from '../index';

describe('<Play />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Play />);
  });

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
