import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import App from '../index';

describe('<App />', () => {
  describe('children', () => {
    it('should render its children inside the main tag', () => {
      const children = (<h1>Test</h1>);
      const renderedComponent = shallow(
        <App>
          {children}
        </App>,
      );
      expect(renderedComponent.find('main')).to.contain(children);
    });
  });
});
