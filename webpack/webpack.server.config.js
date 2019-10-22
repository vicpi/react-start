/* This config file is only for transpiling the Express server file.
* You need webpack-node-externals to transpile an express file
* but if you use it on your regular React bundle, then all the
* node modules your app needs to function get stripped out.
*
*/
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = (env, argv) => {
    const SERVER_PATH = path.resolve(__dirname, '../server/server-prod.js')

    return ({
        entry: {
            "server-prod": SERVER_PATH,
        },
        output: {
            path: path.resolve(__dirname, '..', 'dist'),
            publicPath: '/static/',
            filename: '[name].js'
        },
        mode: 'production',
        target: 'node',
        node: {
            // Need this when working with express, otherwise the build fails
            __dirname: false,   // if you don't put this is, __dirname
            __filename: false,  // and __filename return blank or /
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
