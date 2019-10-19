import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'index.scss'
import globalReducer from 'reducers/index';
import Page from 'components/Page/Page'

const preloadedState = window.__PRELOADED_STATE__ || {}
delete window.__PRELOADED_STATE__

const store = createStore(globalReducer, preloadedState)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);