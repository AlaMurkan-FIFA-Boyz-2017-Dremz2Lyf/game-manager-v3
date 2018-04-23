import { shallow } from 'enzyme';
import React from 'react';

import CreateTournament from '../index';

describe('<CreateTournament />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreateTournament />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a closeModal method', () => {
    wrapper.setState({ modelOpen: true });
    wrapper.instance().closeModal();
    expect(wrapper.state({ modelOpen: false }));
  });

  it('should have a openModal method', () => {
    expect(wrapper.state({ modelOpen: false }));
    wrapper.instance().openModal();
    expect(wrapper.state({ modelOpen: true }));
  });
});
