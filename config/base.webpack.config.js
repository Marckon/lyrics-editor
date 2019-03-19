const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        'index': path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: "bundle.js",
        publicPath: "/",
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: "umd"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webapp-歌词制作',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss|less)$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            camelCase: true,
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: "ReactDOM",
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom"
        }
    }
};