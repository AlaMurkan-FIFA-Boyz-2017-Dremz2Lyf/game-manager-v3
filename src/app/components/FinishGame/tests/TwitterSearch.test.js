import React from 'react';
import { shallow } from 'enzyme';

import TwitterSearch from '../TwitterSearch';

const hashtag = 'fifaboyz';

describe('TwitterSearch', () => {
  it('should match the snapshot and show the hashtag based on props', () => {
    const wrapper = shallow(
      <TwitterSearch hashtag={hashtag} />,
    );

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('MessageHeader').html()).toBe(`<div class="header">#${hashtag}</div>`);
  });
});
