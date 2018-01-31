import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Home from '../index';

describe('<Home />', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).to.be.present();
    const Tournaments = wrapper.find('Tournaments');
    const Play = wrapper.find('Play');
    expect(Tournaments).to.be.present();
    expect(Play).to.be.present();
  });
});
