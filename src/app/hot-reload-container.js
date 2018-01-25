export default (process.env.HOT_RELOAD)
  ? require('react-hot-loader').AppContainer // eslint-disable-line
  : ({ children }) => (children);
