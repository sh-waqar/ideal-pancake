var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/app',
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
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};
