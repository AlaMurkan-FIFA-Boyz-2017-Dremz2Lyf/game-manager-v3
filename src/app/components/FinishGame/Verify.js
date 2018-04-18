import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Table } from 'semantic-ui-react';

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

export default Verify;
