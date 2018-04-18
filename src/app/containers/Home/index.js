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

const HomeContainer = compose(
  graphql(getPlayer, {
    props: ({ ownProps, data: { loading, player } }) => ({
      ...ownProps,
      loading,
      player,
    }),
    options: props => ({
      variables: {
        id: props.playerId,
      },
    }),
  }),
)(Home);

export default HomeContainer;
