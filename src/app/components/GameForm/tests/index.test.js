import { shallow } from 'enzyme';
import React from 'react';

import GameForm from '../index';

describe('<GameForm />', () => {
  it('should match snapshot for started games', () => {
    const wrapper = shallow(<GameForm status="started" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot for other games', () => {
    const wrapper = shallow(<GameForm status="created" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a closeModal method', () => {
    const wrapper = shallow(<GameForm />);
    wrapper.setState({ modelOpen: true });
    expect(wrapper.state({ modelOpen: true }));
    wrapper.instance().closeModal();
    expect(wrapper.state({ modelOpen: false }));
  });

  it('should have a openModal method', () => {
    const wrapper = shallow(<GameForm />);
    expect(wrapper.state({ modelOpen: false }));
    wrapper.instance().openModal();
    expect(wrapper.state({ modelOpen: true }));
  });
});
