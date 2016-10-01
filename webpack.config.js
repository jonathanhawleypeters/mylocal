var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client/index',
  ],
  output: {
    filename: 'src/public/lib/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/client'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-2"]
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  debug: true
};