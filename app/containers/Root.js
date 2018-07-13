// @flow
import React from 'react';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import Routes from '../routes';

export default function Root({ store, history }) {
  console.log(store);
  return (
    <Provider {...store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}
