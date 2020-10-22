const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/server.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.js',
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(), new Dotenv()],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new TsconfigPathsPlugin()],
    },
};
