const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        components: './src/components.js',
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/',
        publicPath: 'https://cdn.jsdelivr.net/gh/sirius0411/kfc-website/',
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
                },
                {
                    from: 'komori',
                    to: 'komori'
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:8].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{ loader: MiniCssExtractPlugin.loader}, 'css-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: '8000',
        host: 'localhost'
    },
    optimization: {
        minimizer: [
            // new UglifyWebpackPlugin({
            //     parallel: 4
            // }),
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserPlugin()
        ]
    }
};