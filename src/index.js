import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from './components/appWrapper';
import { Provider } from 'react-redux';
import rootReducer from './components/reducers/index.js';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);
