const path = require('path')
const baseWebpackConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge')

const devWebpackConfig = merge(baseWebpackConfig, {
   mode : "development",
   devtool : "inline-source-map",
});


module.exports = devWebpackConfig;