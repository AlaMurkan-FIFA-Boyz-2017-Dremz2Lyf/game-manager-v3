import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Play from '../index';

describe('<Play />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Play />);
    expect(renderedComponent).to.be.present();
  });
});
