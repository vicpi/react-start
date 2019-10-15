import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import globalReducer from 'reducers/index';

const preloadedState = window.__PRELOADED_STATE__ || {}
delete window.__PRELOADED_STATE__

const store = createStore(globalReducer, preloadedState)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);