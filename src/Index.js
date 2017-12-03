import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Store from './service/Store';
import registerServiceWorker from './midleware/registerServiceWorker';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, Store)

ReactDOM.render(
  <Provider store={Store}>
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='login' component={Login} />
      <Route path='portfolio' component={Portfolio} />
    </Route>
  </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
