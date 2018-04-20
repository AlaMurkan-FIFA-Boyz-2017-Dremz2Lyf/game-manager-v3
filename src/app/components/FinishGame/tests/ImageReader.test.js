import React from 'react';
import { shallow } from 'enzyme';

import ImageReader from '../ImageReader';
import TesseractMock from './tesseractMock';

const images = { score: 'https://goo.gl/images/wCqoJT', stats: 'https://goo.gl/images/wCqoJT' };

const tessMock = new TesseractMock({ shouldError: false });

describe('ImageReader Component', () => {
  let wrapper;
  let readImagesSpy;
  let onResults;

  beforeEach(() => {
    readImagesSpy = jest.spyOn(ImageReader.prototype, 'readImages');
    onResults = jest.fn();
  });

  afterEach(() => {
    onResults.mockReset();
    readImagesSpy.mockReset();
  });

  it('should match snapshot and show the progress tracker', () => {
    wrapper = shallow(
      <ImageReader processer={tessMock} images={images} onResults={onResults} />,
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match the snapshot if there are no images passed to the component', () => {
    wrapper = shallow(
      <ImageReader processer={tessMock} images={{}} onResults={onResults} />,
    );
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('Message').length).toBe(2);
    expect(wrapper.find('Message').last().prop('color')).toBe('red');
  });

  it('should call readImages if there are images passed to the component', () => {
    wrapper = shallow(<ImageReader processer={tessMock} images={images} onResults={onResults} />);

    expect(readImagesSpy).toHaveBeenCalled();
  });

  it('should not call readImages if there are no images', () => {
    wrapper = shallow(<ImageReader processer={tessMock} />);
    expect(readImagesSpy).not.toHaveBeenCalled();
  });

  describe('readImages', () => {
    it('should call onResults', () => {
      readImagesSpy.mockRestore();
      wrapper = shallow(<ImageReader processer={tessMock} images={images} onResults={onResults} />);

      return wrapper.instance().readImages(images)
        .then(() => expect(onResults).toHaveBeenCalled());
    });
  });
});
