const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  devServer: {
    host: process.env.HOST, // Defaults to `localhost`
    port: 80, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        enforce: 'pre',

        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
};
