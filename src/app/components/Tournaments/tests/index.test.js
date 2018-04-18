import { shallow } from 'enzyme';
import React from 'react';

import Tournaments from '../index';

describe('<Tournaments />', () => {
  let onSelect;
  let wrapper;

  beforeEach(() => {
    onSelect = jest.fn();
  });

  afterEach(() => {
    onSelect.mockRestore();
  });

  it('should render', () => {
    wrapper = shallow(<Tournaments />);
    expect(wrapper).toBeDefined();
  });

  it('should call the onSelect prop when the play button is clicked', () => {
    wrapper = shallow(<Tournaments onSelect={onSelect} />);
    wrapper.find('Button').at(1).simulate('click');
    expect(onSelect).toHaveBeenCalled();
  });
});
