import path from 'path'
import express from 'express'
import axios from 'axios'
import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import isObject from 'is-object'
import { addTodo, setTodos } from 'actions'
import globalReducer from 'reducers'
import { StaticRouter } from 'react-router';
import Page from 'components/Page/Page'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
const config = require('../webpack/webpack.dev.config.js')
const routes = require('./routes/index')

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

app.use('/', routes)

app.get('/*', (req, res) => {
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
            const context = {};
            const html = renderToString(
                <Provider store={store}>
                    <StaticRouter
                      location={req.originalUrl}
                      context={context}
                    >
                        <Page />
                    </StaticRouter>
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

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})