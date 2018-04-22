import { shallow } from 'enzyme';
import React from 'react';

import Game from '../';
import { games } from '../../../mocks/';

describe('<Game />', () => {
  const { home, away } = games[0];

  it('should render', () => {
    const wrapper = shallow(<Game home={home} away={away} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
