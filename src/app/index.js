import React from 'react';
import ReactDOM from 'react-dom';

import './theme';
import HotReloadContainer from './hot-reload-container';
import Home from './components/Home';

const appDom = document.getElementById('app');

const WithParent = (
  <HotReloadContainer>
    <Home />
  </HotReloadContainer>
);

// Render the main app react component into the app div.
ReactDOM.render(WithParent, appDom);
