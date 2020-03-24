import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';

import LanguageProvider from 'providers/LanguageProvider';
import ThemeProvider from 'providers/ThemeProvider';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./assets/images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
import './templates/mixins';
import './assets/scss/index.scss';
/* eslint-enable import/no-unresolved, import/extensions */

import App from 'containers/App';
import MomentUtils from '@date-io/moment';
import configureStore from './configureStore';
import { translationMessages } from './i18n';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <StoreProvider store={store}>
      <LanguageProvider messages={messages}>
        <ThemeProvider>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <ConnectedRouter history={history}>
              <App />
            </ConnectedRouter>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </LanguageProvider>
    </StoreProvider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/my.js'),
      ]),
    )
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
