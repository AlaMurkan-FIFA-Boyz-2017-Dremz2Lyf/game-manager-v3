import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <main>
    <h1>Welcome to the main app mock</h1>
    <p>This wrapper app is used for dev to render the micro app.</p>
    {children}
  </main>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
