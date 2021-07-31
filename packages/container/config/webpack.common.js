
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
// const packageJson = require('../package.json');

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
        // new ModuleFederationPlugin({
        //     name: 'container',
        //     remotes: {
        //         auth: `auth@http://${process.env.FRONTEND_APIGATEWAY}/authentication/remoteEntry.js`,
        //         menu: `menu@http://${process.env.FRONTEND_APIGATEWAY}/menu/remoteEntry.js`,
        //         schedule: `schedule@http://0.0.0.0:9104/remoteEntry.js`
        //     },
        //     shared: packageJson.dependencies,
        // }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}
