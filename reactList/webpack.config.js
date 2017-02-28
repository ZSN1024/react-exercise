/**
 * config for develop mode
 */

let webpack = require('webpack');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let StyleLintPlugin = require('stylelint-webpack-plugin');

let devUrl = 'http://localhost:4020/';
let proxyUrl = 'http://192.168.0.4:8081';

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 4020,
        proxy: {
            '/api': {
                target: proxyUrl,
                secure: false
            }
        },
        historyApiFallback: {
            rewrites: [
                {from: /index.js$/, to: '/index.js'}
            ]
        }
    },
    devtool: 'source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?' + devUrl,
        './app/index.js'
    ],
    output: {
        path: './dist',
        publicPath: '/',
        filename: 'index.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react-hmre']
                }
            },
            {
                test: /(\.css|\.scss)$/,
                loaders: [
                    "style",
                    "css?url=false",
                    "sass?"
                ]
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev')
            }
        }),
        new StyleLintPlugin(),
        new OpenBrowserPlugin({
            url: devUrl
        })
    ]
};