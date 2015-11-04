var path = require('path');
var webpack = require('webpack');
var EXAMPLES_DIR = path.resolve(process.cwd(), 'examples');

var WebpackErrorNotificationPlugin = require('webpack-error-notification');

module.exports = {
  entry: {
    basic: '/Users/matt/Programming/fancy-input/examples/basic/app'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: 'examples/__build__',
    publicPath: '/__build__/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }, {
        test: /\.(scss|css)$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  plugins: [new WebpackErrorNotificationPlugin(/* strategy */)],
  postcss: function (webpack) {
    return [require('cssnext')
      (),
      require('postcss-bem-linter')
      ('bem'),
      require('postcss-nested'),
      require('postcss-mixins'),
      require('postcss-import')
      ({
        addDependencyTo: webpack
      })];
  }
}
