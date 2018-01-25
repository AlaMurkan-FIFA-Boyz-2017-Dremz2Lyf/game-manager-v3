import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Tournaments from '../index';

describe('<Tournaments />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Tournaments />);
    expect(renderedComponent).to.be.present();
  });
});
