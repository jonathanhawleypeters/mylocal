var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client/index',
  ],
  output: {
    filename: 'src/public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/client'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"],
        }
      }
    ]
  },
  debug: true
};