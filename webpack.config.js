const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

process.env.NODE_ENV = 'development';

module.exports = {
    devtool: 'eval',

    entry: [
        path.resolve('src/index.js'),
    ],

    output: {
        path: path.resolve('build'),
        filename: 'static/js/bundle.js',
        publicPath: '/',
    },

    devServer: {
        port: 3333,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true, // Note. This prop enables CSS modules.
                        },
                    }
                ]
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('src/index.html'),
        }),
        
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
    }
};