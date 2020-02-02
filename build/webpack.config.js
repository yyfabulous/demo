const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app/app.js',
  mode: 'production',
  output: {
    filename: 'js/[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
      // { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/app.html'
    }),
    new CopyWebpackPlugin([{ from: '/src/assets/images', to: '../dist/images' }]),
    new MiniCssExtractPlugin({
      filename: 'css/[hash].css',
      allChunks: true
    })
  ]
};
