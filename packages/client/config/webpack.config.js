'use strict';

const webpack = require('webpack'),
    path = require('path'),
    // glob = require('glob'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin');
// FileManagerPlugin = require('filemanager-webpack-plugin'),
// HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin'),
// CopyWebpackPlugin = require('copy-webpack-plugin');

const source = path.join(__dirname, '../source');
const env = process.env.NODE_ENV;

// const generateHtml = (dir) => {
//     return glob.sync(dir + '/**/*.html').map((file) => {
//         console.log(file);
//         const distPath = file.replace('../source/html', '.');
//         console.log(distPath);
//         return new HtmlWebpackPlugin({
//             hash: false,
//             cache: false,
//             inject: true,
//             template: path.resolve(__dirname, file),
//             filename: distPath,
//             favicon: 'images/favicon.ico',
//         });
//     });
// };
//
// const htmlPlugins = generateHtml('../source/html');
//
// const writeHtml = [new HtmlWebpackHardDiskPlugin()];

module.exports = {
    mode: env,

    devtool:
        env === 'production'
            ? false
            : env === 'development' && 'inline-source-map',

    context: source,

    entry: {
        main: [source + '/scripts/index'],
    },
    output: {
        path: path.join(__dirname, '/destination'),
        publicPath: '/',
        filename: 'scripts/[name].js',
        // hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/[hash].hot-update.json',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
            },
        }),

        env === 'production' && new CleanWebpackPlugin(),

        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: './images/',
        //             to: 'images',
        //             globOptions: {
        //                 ignore: ['*.DS_Store'],
        //             },
        //         },
        //     ],
        // }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css',
        }),

        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            favicon: source + '/images/favicon.ico',
            template: source + '/html/index.html', // template file
            filename: 'index.html', // output file
        }),

        // new FileManagerPlugin({
        //     events: {
        //         onEnd: {
        //             copy: [
        //                 // { source: '/path/fromfile.txt', destination: '/path/tofile.txt' },
        //                 {
        //                     source: path.join(
        //                         __dirname,
        //                         '/destination/scripts/**/*.js',
        //                     ),
        //                     destination: path.join(
        //                         __dirname,
        //                         '/app/assets/javascripts',
        //                     ),
        //                 },
        //             ],
        //             // delete: [path.join(__dirname, '/destination/scripts/*.js')],
        //         },
        //     },
        // }),

        new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime'],
                            cacheDirectory: true,
                        },
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
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '/destination'),
        // open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
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
    optimization: {
        minimize: true,
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
        runtimeChunk: {
            name: 'runtime',
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
