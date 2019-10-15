const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack.dev.config.js')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    index: false
}))

app.use(webpackHotMiddleware(compiler))

app.get('/health', (req, res) =>
    res.json({success: true})
);

app.get('/', (req, res) => {
    compiler.outputFileSystem.readFile(path.resolve(__dirname, '..', 'dist', 'index.html'), (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
    })
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
