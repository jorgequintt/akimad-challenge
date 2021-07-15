const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})],
    },
});
