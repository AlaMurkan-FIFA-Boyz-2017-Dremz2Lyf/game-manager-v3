import React from 'react';
import { shallow } from 'enzyme';

import Searching from '../Searching';

describe('Searching', () => {
  let wrapper;
  let fetchImagesMock;

  beforeEach(() => {
    fetchImagesMock = jest.fn();
  });

  afterEach(() => {
    fetchImagesMock.mockReset();
  });

  it('should match the snapshot when loading', () => {
    wrapper = shallow(
      <Searching loading fetchImages={fetchImagesMock} />,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Loader').length).toBe(1);
    expect(fetchImagesMock).toHaveBeenCalled();
  });

  it('should match the snapshot when loaded', () => {
    wrapper = shallow(
      <Searching loading={false} fetchImages={fetchImagesMock} />,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Loader').length).toBe(0);
    expect(fetchImagesMock).toHaveBeenCalled();
  });
});
