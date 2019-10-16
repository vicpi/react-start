import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CApp from './containers/CApp/CApp';
import globalReducer from 'reducers/index';

const preloadedState = window.__PRELOADED_STATE__ || {}
delete window.__PRELOADED_STATE__

const store = createStore(globalReducer, preloadedState)
ReactDOM.render(
    <Provider store={store}>
        <CApp />
    </Provider>,
    document.getElementById('root')
);