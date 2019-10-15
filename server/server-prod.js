import path from 'path'
import express from 'express'
import axios from 'axios'
import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { addTodo, setTodos } from 'actions'
import globalReducer from 'reducers'
import App from 'components/App/App'

const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, '..', 'dist')));

app.get('/favicon.ico/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist/favicon.ico'))
})

app.get('/manifest.json/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist/manifest.json'))
})

app.get('/robots.txt/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist/robots.txt'))
})

app.get('/', (req, res) => {
    const store = createStore(globalReducer)
    axios.get('http://localhost:8000/todos/')
        .then(response => {
            store.dispatch(setTodos(response.data))
            // Render the component to a string
            const html = renderToString(
                <Provider store={store}>
                    <App />
                </Provider>
            )

            // Grab the initial state from our Redux store
            const preloadedState = store.getState()

            res.send(renderFullPage(html, preloadedState))
        })

})

function renderFullPage(html, preloadedState) {
    let file = fs.readFileSync(path.resolve(__dirname, '..', 'dist', 'index.html'), 'utf8')
    const state = JSON.stringify(preloadedState).replace(/</g, '\\u003c')
    file = file.replace(
        '<div id="root"></div>',
        ` <script> window.__PRELOADED_STATE__ = ${state} </script><div id="root">${html}</div>`
    )
    console.log(file)
    return file
}

app.listen(port)