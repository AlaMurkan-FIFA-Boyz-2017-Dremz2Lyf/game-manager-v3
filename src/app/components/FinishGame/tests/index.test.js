import { shallow } from 'enzyme';
import React from 'react';

import FinishGame from '../index';
import { combinedResults } from './tesseractMock';

describe('<FinishGame />', () => {
  let wrapper;
  let closeModalMock;

  beforeEach(() => {
    closeModalMock = jest.fn();
  });

  afterEach(() => {
    closeModalMock.mockRestore();
  });

  it('should match snapshot and start with step 0', () => {
    wrapper = shallow(<FinishGame closeModal={closeModalMock} />);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.state('step')).toBe(0);
  });

  describe('onResults - method', () => {
    it('should set results to state and increment the step counter', () => {
      wrapper = shallow(<FinishGame closeModal={closeModalMock} />);
      expect(wrapper.state('results')).toBeUndefined();
      expect(wrapper.state('step')).toBe(0);
      wrapper.instance().onResults(combinedResults);
      expect(wrapper.state('results')).toEqual(combinedResults);
      expect(wrapper.state('step')).toBe(1);
    });
  });

  describe('fetchImages', () => {
    it('should work....', () => {

    });
  });
});
