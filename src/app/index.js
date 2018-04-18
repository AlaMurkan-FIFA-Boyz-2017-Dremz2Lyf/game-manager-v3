import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import './theme';
import HotReloadContainer from './hot-reload-container';
import Home from './components/Home';
import Authorizer from './containers/Authorizer';
import config from './containers/Authorizer/config';
import store from './store';

require('dotenv').config();

const client = new ApolloClient({
  uri: 'https://p5o8b817f9.execute-api.us-east-1.amazonaws.com/dev/graphql',
});

const appDom = document.getElementById('app');

const WithParent = (
  <HotReloadContainer>
    <ApolloProvider client={client}>
      <Provider store={store}>
        {/* <Authorizer auth={new CognitoAuth(config)}> */}
        <Home />
        {/* </Authorizer> */}
      </Provider>
    </ApolloProvider>
  </HotReloadContainer>
);

// Render the main app react component into the app div.
ReactDOM.render(WithParent, appDom);
