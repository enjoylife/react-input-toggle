var path = require('path');
var webpack = require('webpack');
var EXAMPLES_DIR = path.resolve(process.cwd(), 'examples');

var WebpackErrorNotificationPlugin = require('webpack-error-notification');

module.exports = {
  entry: {
    basic: 'examples/basic/app.js'
  },
  resolve: {
    root: path.join(__dirname)
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-input-toggle.js',
    sourceMapFilename: 'react-input-toggle.sourcemap.js',
    library: 'InputToggle',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|react-a11y)/,
        loaders: ['babel']
      }, {
        test: /\.scss$/,
        loaders: [
          "style", "css", 'autoprefixer?browsers=last 2 versions', "sass"
        ]
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?mimetype=image/svg+xml"
      }

    ]
  },
  plugins: [
    new webpack.optimize
      .OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize
      .UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
  ]
}
