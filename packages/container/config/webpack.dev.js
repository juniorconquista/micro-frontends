const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    entry: './src/main/index.tsx',
    output: {
        publicPath: 'http://localhost:3001/',
    },
    devServer: {
        port: 3001,
        host: '0.0.0.0',
        historyApiFallback: true,
        disableHostCheck: true
    }
});
