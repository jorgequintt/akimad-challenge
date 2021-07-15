require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.eot$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin(),
        new ForkTsCheckerWebpackPlugin(),
    ],
};
