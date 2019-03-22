const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
      new HTMLWebpackPlugin({
          template: 'static/index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
  ]
});
