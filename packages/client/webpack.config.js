'use strict';

const webpack = require('webpack'),
    path = require('path'),
    glob = require('glob'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    FileManagerPlugin = require('filemanager-webpack-plugin'),
    {GenerateSW} = require('workbox-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin');

const generateHtml = (dir) => {
    return glob.sync(dir + '/**/*.html').map((file) => {
        console.log(file);
        const distPath = file.replace('./source/html', '.');
        console.log(distPath);
        return new HtmlWebpackPlugin({
            hash: false,
            cache: false,
            inject: true,
            template: path.resolve(__dirname, file),
            filename: distPath,
            favicon: 'images/favicon.ico',
        });
    });
};

const htmlPlugins = generateHtml('./source/html');

const writeHtml = [new HtmlWebpackHardDiskPlugin()];

module.exports = () => {
    console.log(process.env.NODE_ENV);
    const isEnvDevelopment = process.env.NODE_ENV === 'development';
    const isEnvProduction = process.env.NODE_ENV === 'production';
    const env = isEnvDevelopment ? 'development' : 'production';
    const source = path.join(__dirname, './source');

    console.log(env);
    return {
        mode: env,
        bail: isEnvProduction,
        devtool: isEnvProduction
            ? false
            : isEnvDevelopment && 'inline-source-map',

        context: source,

        entry: {
            main: ['webpack/hot/dev-server', source + '/scripts/index'],
        },

        output: {
            path: path.join(__dirname, './destination'),
            publicPath: '',
            filename: 'scripts/[name].js',
            // hotUpdateChunkFilename: 'hot/hot-update.js',
            hotUpdateMainFilename: 'hot/[hash].hot-update.json',
        },

        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
            runtimeChunk: {
                name: 'runtime',
            },
        },

        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
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
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react',
                                ],
                                plugins: ['@babel/plugin-transform-runtime'],
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
        devServer: {
            contentBase: path.join(__dirname, './destination'),
            hot: true,
            port: 8808,
            // open: true,
            compress: true,
            watchContentBase: true,
            historyApiFallback: true,
        },

        // watch: true,

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
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env),
                },
            }),
            isEnvProduction && new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'styles/[name].css',
                chunkFilename: 'styles/[id].css',
            }),
            new FileManagerPlugin({
                events: {
                    onEnd: {
                        delete: [path.join(__dirname, './destination', 'hot')],
                    },
                },
            }),
            new GenerateSW({
                swDest: 'scripts/sw.js',
                clientsClaim: true,
                skipWaiting: true,
                maximumFileSizeToCacheInBytes: 7000000,
            }),
            new webpack.HotModuleReplacementPlugin(),
        ]
            .concat(htmlPlugins, writeHtml)
            .filter(Boolean),
    };
};
