const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Komori Fan Club',
            template: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'static',
                    to: 'assets'
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: '8000',
        host: 'localhost'
    }
};