
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const package = require('../package.json');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.join(__dirname, '..', 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts(x?)$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                store: `store@http://0.0.0.0:3003/remoteEntry.js`,
                shoppingCart: `shoppingCart@http://0.0.0.0:3002/remoteEntry.js`,
            },
            shared: package.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}
