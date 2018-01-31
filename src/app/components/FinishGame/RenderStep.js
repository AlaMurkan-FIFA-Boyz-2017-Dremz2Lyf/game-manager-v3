import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Table } from 'semantic-ui-react';
import ImageReader from './ImageReader';
import Directions from './Directions';
import TwitterSearch from './TwitterSearch';
import Searching from './Searching';

const TRACKED_STATS = [
  'score',
  'shots',
  'shots on target',
  'possession %',
  'tackles',
  'fouls',
  'yellow cards',
  'red cards',
  'injuries',
  'offsides',
  'corners',
  'shot accuracy %',
  'pass accuracy %',
];

const Verify = ({ results }) => (
  <Segment basic>
    <Header color="teal">
      Verify
    </Header>
    <p>Please verify that the results match the image below.</p>
    <Table compact inverted unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="left">Home</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Stat</Table.HeaderCell>
          <Table.HeaderCell textAlign="right">Away</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {TRACKED_STATS.map((statName) => {
          const home = results.home[statName];
          const away = results.away[statName];
          return (
            <Table.Row key={statName}>
              <Table.Cell textAlign="left">{home}</Table.Cell>
              <Table.Cell textAlign="center">{statName}</Table.Cell>
              <Table.Cell textAlign="right">{away}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </Segment>
);

Verify.propTypes = {
  results: PropTypes.object,
};


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
