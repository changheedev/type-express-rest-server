const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

const config = {
    mode: 'production',
    optimization: {
        // runtimeChunk: {
        //     name: 'runtime',
        // },
        // splitChunks: {
        //     cacheGroups: {
        //         commons: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendor',
        //             chunks: 'all',
        //         },
        //     },
        // },
        minimize: true,
        minimizer: [new TerserPlugin()],
        nodeEnv: false,
    },
};

module.exports = merge(common, config);
