import React from 'react';
import { shallow } from 'enzyme';

import RenderStep from '../RenderStep';

describe('RenderStep', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <RenderStep step={0} />,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Directions').length).toBe(1);
  });
});
