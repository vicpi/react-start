const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = (env, argv) => {
    const SERVER_PATH = path.resolve(__dirname, '..', 'server/server-dev-ssr.js')

    return ({
        entry: {
            "server-dev-ssr": SERVER_PATH,
        },
        output: {
            path: path.resolve(__dirname, '..', 'dist'),
            publicPath: '/',
            filename: '[name].js'
        },
        mode: 'production',
        target: 'node',
        node: {
            // Without this option, there is an error in the terminal
            // "Error: EACCES: permission denied, mkdir '/dist'"
            __dirname: false,
        },
        externals: [nodeExternals()], // Need this to avoid error when working with Express
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    loader: 'ignore-loader'
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }
            ]
        },
        resolve: {
            modules: ['node_modules', 'src']
        }
    })
}