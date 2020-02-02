const webpackConfig = require('./webpack.config');
const merge = require('webpack-merge');

const webpackDev = {
  devServer: {
    port: 3000,
    hot: true,
    open: true
  }
};

module.exports = merge([webpackConfig, webpackDev]);
