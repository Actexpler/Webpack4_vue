const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const MimiCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'js/[name].js'
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "static": path.resolve(__dirname, '../static')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MimiCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: path.posix.join("static",'img/[name].[hash:7].[ext]')
                }
              },
              {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: path.posix.join("static",'media/[name].[hash:7].[ext]')
                }
              },
              {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000, 
                  name: path.posix.join("static",'fonts/[name].[hash:7].[ext]')
                }
              }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new MimiCssExtractPlugin({
            filename: "static/css/[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'static'),
            to: "static",
            ignore: ['.*']
          }]),
        new VueLoaderPlugin()
    ]
}