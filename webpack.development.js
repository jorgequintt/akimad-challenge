const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        writeToDisk: true,
        historyApiFallback: true,
    },
});
