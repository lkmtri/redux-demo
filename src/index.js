import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './Store';
import { Provider } from 'react-redux';

// Provider is to inject the store to our app
ReactDOM.render(
  <Provider store = { store }>
      <App />
  </Provider>,
  document.getElementById('root')
);
