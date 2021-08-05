const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const package = require('../package.json');
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    publicPath: 'http://localhost:3003/',
  },
  devServer: {
    port: 3003,
    host: '0.0.0.0',
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'store',
      filename: 'remoteEntry.js',
      exposes: {
        './StoreApp': './src/main/bootstrap',
      },
      shared: package.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.dev.html',
    })
  ],
});
