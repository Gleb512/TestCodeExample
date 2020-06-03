const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = ext => isProd ? `[name].${ext}` : `[name].[hash].${exr}`

module.exports = {

    context: path.resolve(__dirname, 'src'),//начальный путь
    mode: 'development',
    entry: {
        bundle: './index.js',
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'img', to: 'img' }
            ],
            options: {
                concurrency: 100,
            },
        }),
        new MiniCssExtractPlugin(),

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, // instead of style-loader
                    'css-loader'
                ]
            },
            {//
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                use: ['svg-inline-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader',],
            },
        ]
    }
}