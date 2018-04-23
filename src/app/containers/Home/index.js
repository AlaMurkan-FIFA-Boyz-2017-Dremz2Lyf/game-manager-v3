import { gql, graphql, compose } from 'react-apollo';
import Home from '../../components/Home';

const getPlayer = gql`
query getPlayer($id: String!) {
  getPlayer(id: $id) {
    id
    username
  }
}
`;

export const getPlayerOptions = props => ({
  variables: {
    id: props.playerId,
  },
});

export const getPlayerProps = ({ ownProps, data: { loading, player } }) => ({
  ...ownProps,
  loading,
  player,
});

const HomeContainer = compose(
  graphql(getPlayer, {
    props: getPlayerProps,
    options: getPlayerOptions,
  }),
)(Home);

export default HomeContainer;
