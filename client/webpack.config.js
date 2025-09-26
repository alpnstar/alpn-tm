const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    devtool,
    target,
    cache: {
        type: 'filesystem',
    },
    entry: [path.resolve(__dirname, 'src/Index.tsx')],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@/app': path.resolve(__dirname, 'src/app/'),
            '@/pages': path.resolve(__dirname, 'src/pages/'),
            '@/widgets': path.resolve(__dirname, 'src/widgets/'),
            '@/features': path.resolve(__dirname, 'src/features/'),
            '@/entities': path.resolve(__dirname, 'src/entities/'),
            '@/shared': path.resolve(__dirname, 'src/shared/'),
        },
    },
    output: {
        path: path.resolve(__dirname, '../bundle'),
        clean: true,
        filename: 'bundle.[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    devServer: {
        compress: false,
        hot: true,
        open: false,
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[id].[contenthash].css',
        }),
        new Dotenv({
            path: devMode ? './.env.dev' : './.env.prod',
        }),
        devMode && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {

                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'client/src')],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(woff2?|ttf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'imgs/[contenthash][ext]',
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.([jt])sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
