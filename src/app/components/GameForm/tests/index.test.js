import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import GameForm from '../index';

describe('<GameForm />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<GameForm />);
    expect(renderedComponent).to.be.present();
  });
});
