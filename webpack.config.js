const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: { app: './src/app.js', sub: './src/sub.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'images',
          publicPath: 'images'
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
}