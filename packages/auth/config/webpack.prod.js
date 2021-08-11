const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const package = require('../package.json');
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'http://localhost:3002/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shoppingCart',
            filename: 'remoteEntry.js',
            exposes: {
                './ShoppingCartApp': './src/main/bootstrap',
              },
            shared: package.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
});
