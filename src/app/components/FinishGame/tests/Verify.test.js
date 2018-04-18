import React from 'react';
import { shallow } from 'enzyme';

import Verify from '../Verify';
import { combinedResults } from './tesseractMock';

describe('Verify', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Verify results={combinedResults} />,
    );

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('TableRow').length).toBe(14);
  });
});
