import React from 'react';
import ReactDOM from 'react-dom';

import './theme';
import HotReloadContainer from './hot-reload-container';
import ParentApp from './containers/App';
import Home from './components/Home';

const appDom = document.getElementById('app');

console.log(`Starting React App @ ${process.env.VERSION}`); // eslint-disable-line no-console

const WithParent = (
  <HotReloadContainer>
    <ParentApp>
      <Home />
    </ParentApp>
  </HotReloadContainer>
);

// Render the main app react component into the app div.
ReactDOM.render(WithParent, appDom);
