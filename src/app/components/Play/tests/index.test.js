import { shallow } from 'enzyme';
import React from 'react';

import Play from '../index';

describe('<Play />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Play />);
  });

  it('should match snapshot without a tournament', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with a tournament', () => {
    wrapper.setProps({ tournament: true });
    expect(wrapper).toMatchSnapshot();
  });
});
