import { getPlayerOptions, getPlayerProps } from '../index';

describe('getPlayerOptions - function', () => {
  it('should map props correctly to variables', () => {
    const result = getPlayerOptions({ playerId: '1' });
    expect(result).toEqual({ variables: { id: '1' } });
  });
});

describe('getPlayerProps - function', () => {
  it('should merge ownProps with data', () => {
    const ownProps = { fakeProp: 'prop' };
    const graphqlProps = { loading: false, player: null };
    const result = getPlayerProps({ ownProps, data: graphqlProps });
    expect(result).toEqual({ fakeProp: 'prop', loading: false, player: null });
  });
});
