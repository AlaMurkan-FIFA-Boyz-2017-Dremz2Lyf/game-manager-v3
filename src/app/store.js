import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reducers from './reducers';

let composeEnhancers = compose;

if (process.env.REDUX_DEV_TOOLS && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const middlewares = [];

const emptyState = {};

export default createStore(
  reducers,
  emptyState,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
