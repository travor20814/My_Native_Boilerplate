// @flow
/* eslint no-param-reassign: [0], no-console: [0], no-underscore-dangle: [0] */

import React from 'react';
import { Provider } from 'react-redux';
import {
  routerReducer,
  routerMiddleware,
  ConnectedRouter,
} from 'react-router-redux';
import debug from 'debug';
import createHistory from 'history/createMemoryHistory';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { reducer as formReducer } from 'redux-form';

// Routers

// Redux reducers

// Debug mode
if (process.env.NODE_ENV !== 'production') {
  debug.enable('Mobile:*');
}

const history = createHistory();

export const API_HOST = '';

export const store = createStore(
  combineReducers({
    form: formReducer,
    routing: routerReducer,
  }),
  {},
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
    ),
  ),
);

function App(): React$Element<*> {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={null} />
          <Redirect to={{ pathname: '/' }} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
