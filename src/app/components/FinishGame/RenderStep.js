import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImageReader from './ImageReader';
import Directions from './Directions';
import TwitterSearch from './TwitterSearch';
import Searching from './Searching';
import Verify from './Verify';

class RenderStep extends PureComponent {
  static propTypes = {
    step: PropTypes.number,
  }

  getStepComponent = (step) => {
    const stepMap = [
      Directions,
      TwitterSearch,
      Searching,
      ImageReader,
      Verify,
    ];

    return stepMap[step];
  }

  render() {
    const { step } = this.props;

    const CurrentStep = this.getStepComponent(step);
    return (
      <CurrentStep {...this.props} />
    );
  }
}

export default RenderStep;
