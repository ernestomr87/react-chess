import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'antd/dist/antd.css';
import './globalStyles';
import './index.css';

import 'antd-iconfont/iconfont.css';
import enUS from 'antd/lib/locale-provider/en_US';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={enUS}>
        <App />
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
