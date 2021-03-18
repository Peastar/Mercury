const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isEnvDevelopment = process.env.NODE_ENV === 'development';
const env = isEnvDevelopment ? 'development' : 'production';

module.exports = {
    context: paths.src,
    entry: [paths.src + '/scripts/index.js'],
    output: {
        path: paths.build,
        filename: 'scripts/[name].bundle.js',
        publicPath: '',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
            },
        }),
        new HtmlWebpackPlugin({
            title: 'PeaceStar',
            favicon: paths.src + '/images/favicon.ico',
            template: paths.src + '/html/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css',
        }),
    ],
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.scss',
            '.css',
            '.pcss',
            '.ts',
            '.tsx',
        ],
        modules: ['node_modules'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.s?p?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.(ttf|eot|svg|woff2?)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[ext]/[name].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.(mp4|ogv|webm)$/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.pdf$/,
                loader: 'file-loader',
                options: {
                    name: 'pdf/[name].[ext]',
                    publicPath: '../',
                },
            },
        ],
    },
};
