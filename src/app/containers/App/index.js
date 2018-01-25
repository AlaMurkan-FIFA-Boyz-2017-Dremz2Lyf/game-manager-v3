import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <main>
    {children}
  </main>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
