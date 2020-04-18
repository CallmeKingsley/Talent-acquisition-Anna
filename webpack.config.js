const path = require('path')
// const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const HTMLWebPackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/client/index.html'),
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: path.join(__dirname, '/client/index.js'),
  module: {
    rules: [{ test: /\.css$/, use: 'css-loader' },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    },{
      test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/i,
      loader: 'url-loader',
      options: {
        limit: 100000,
      }
      },
    ]
  },
  devServer: {
    watchContentBase: true
  },
  output: {
    filename: 'transform.js',
    path: path.join(__dirname, '/Configs/build')
  },
  plugins: [HTMLWebPackPluginConfig]
}
