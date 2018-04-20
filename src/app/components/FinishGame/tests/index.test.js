import { shallow } from 'enzyme';
import React from 'react';

import FinishGame from '../index';
import { combinedResults } from './tesseractMock';

describe('<FinishGame />', () => {
  let wrapper;
  let closeModalMock;
  let imageFetcherMock;

  beforeEach(() => {
    closeModalMock = jest.fn();
    imageFetcherMock = jest.fn((baseUrl, hashtag) => Promise.resolve({
      images: ['https://fake.url.com/image1', 'https://fake.url.com/image2'],
      imageSource: 'https://fake.url.com',
    }));
  });

  afterEach(() => {
    jest.resetAllMocks();
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
    it('should call the imageFetcher with the baseUrl and hashtag', () => {
      wrapper = shallow(
        <FinishGame closeModal={closeModalMock} imageFetcher={imageFetcherMock} />,
      );
      return wrapper.instance().fetchImages().then(() => {
        expect(imageFetcherMock).toHaveBeenCalled();
        expect(imageFetcherMock).toHaveBeenCalledWith('https://fake.url.com', '656liv4manure0');
      });
    });
  });
});
