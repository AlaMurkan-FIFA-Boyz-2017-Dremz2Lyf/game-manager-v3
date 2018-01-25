import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import HelloWorld from '../index';

describe('<HelloWorld />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<HelloWorld />);
    expect(renderedComponent).to.be.present();
  });
});
