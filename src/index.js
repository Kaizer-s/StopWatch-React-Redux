import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { circleReducer } from './redux/circleReducer';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(circleReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
