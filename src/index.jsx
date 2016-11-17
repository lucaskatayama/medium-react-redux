import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

import App from './App';

const middlewares = [
  thunk,
  promise(),
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(reduxLogger());
}

const store = createStore(reducers, applyMiddleware(...middlewares));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
