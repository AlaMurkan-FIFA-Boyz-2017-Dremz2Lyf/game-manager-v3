import { shallow } from 'enzyme';
import React from 'react';

import Game from '../';
import { created, started } from './fixtures';

describe('<Game />', () => {
  it('should match the snapshot for created games', () => {
    const { home, away } = created;
    const wrapper = shallow(<Game home={home} away={away} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot for started games', () => {
    const { home, away } = started;
    const wrapper = shallow(<Game home={home} away={away} />);
    expect(wrapper).toMatchSnapshot();
  });
});
