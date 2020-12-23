const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const commonConf = require('webpack.common');
const outputFile = '[name]';
const assetFile = '[name]';

module.exports = () => webpackMerge(commonConf({outputFile, assetFile}), {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
});