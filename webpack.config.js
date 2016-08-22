var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    bundle: './app.js',
    vendors: ['angular']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app'),
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: 'style!css?sourceMap!sass?sourceMap'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};
