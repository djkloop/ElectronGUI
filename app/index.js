import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { stores, history } from './store';
import './app.global.css';

render(
  <AppContainer>
    <Root store={stores} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={stores} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
