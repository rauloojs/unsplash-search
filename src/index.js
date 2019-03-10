import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'loaders.css/loaders.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root'));
