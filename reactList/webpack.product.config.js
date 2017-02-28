/**
 * config for product mode
 */

let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: './dist',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url'
            }
        ]
    },
    sassLoader: {
        includePaths: ['./app']
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            './app',
            './node_modules',
        ]
    },
    plugins: [
        // for product
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: false
        }),
        new ExtractTextPlugin("./index.css"),
        new CopyWebpackPlugin([
            {
                from: 'app/index.html',
                transform: function (content) {
                    return new Buffer(content.toString().replace(/<!--|-->/g, ''));
                },
                to: 'index.html'
            },
            {
                from: 'app/static',
                to: 'static'
            }
        ])
    ]

};