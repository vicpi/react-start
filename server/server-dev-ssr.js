const path = require('path')
const express = require('express')
import axios from 'axios'
import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const isObject = require('is-object');
import { addTodo, setTodos } from 'actions'
import globalReducer from 'reducers'
import App from 'components/App/App'
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack.dev.config.js')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true,
    serverSideRender: true,
    index: false
}))

app.use(webpackHotMiddleware(compiler))

function normalizeAssets(assets) {
    if (isObject(assets)) {
        return Object.values(assets);
    }

    return Array.isArray(assets) ? assets : [assets];
}

app.get('/', (req, res) => {
    const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
    const outputPath = res.locals.webpackStats.toJson().outputPath;
    const javascriptBundles = normalizeAssets(assetsByChunkName.index)
        .filter((path) => path.endsWith('.js'))
        .map((path) => `<script src="${config.output.publicPath + path}"></script>`)
        .join('\n')

    axios.get('http://localhost:8000/todos/')
        .then(response => {
            const store = createStore(globalReducer)
            store.dispatch(setTodos(response.data))
            const preloadedState = JSON.stringify(store.getState())
                .replace(/</g, '\\u003c')
            const html = renderToString(
                <Provider store={store}>
                    <App />
                </Provider>
            )
            let file = fs.readFileSync(
                path.resolve(__dirname, '..', 'src', 'index.html'), 'utf8'
            )
            console.log(path.resolve(__dirname, '..', 'src', 'index.html'))
            file = file.replace(
                '<div id="root"></div>',
                ` <script> window.__PRELOADED_STATE__ = ${preloadedState} </script>
                <div id="root">${html}</div>
                ${javascriptBundles}
                `
            )
            res.send(file);
        })
});

app.get('/health', (req, res) =>
    res.json({success: true})
);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})