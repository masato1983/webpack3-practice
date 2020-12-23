const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name].[chunkhash]';
const assetFile = '[name].[contenthash]';

module.exports = () => merge(commonConf({outputFile, assetFile}), {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
});