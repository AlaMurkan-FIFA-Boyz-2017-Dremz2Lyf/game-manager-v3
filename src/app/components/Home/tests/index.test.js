import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Home from '../index';
import HelloWorld from '../../HelloWorld';
import styles from '../style.css';

describe('<Home />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Home />);
    expect(renderedComponent).to.be.present();
    expect(renderedComponent).to.have.descendants(HelloWorld);
    expect(renderedComponent.prop('className')).to.equal(styles.home);
  });
});
