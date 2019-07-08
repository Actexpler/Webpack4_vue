const path = require('path')
const baseWebpackConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        filename: 'js/[name].js'
    },
    devtool: "source-map"
});