const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path')
module.exports = merge({
    devtool: 'source-map',
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/'),
        publicPath: './'
    },
    mode: 'development'
}, common)