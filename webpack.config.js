/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
  },
  target: 'node',
  node: false,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new Dotenv()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    plugins: [new TsconfigPathsPlugin()],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
};
