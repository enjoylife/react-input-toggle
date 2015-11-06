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
          exclude: /(node_modules|bower_components|react-a11y)/,
        loaders: ['babel']
      }, {
        test: /\.scss$/,
        loaders: [
          "style", "css", 'autoprefixer?browsers=last 2 versions', "sass"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin(), new WebpackErrorNotificationPlugin(/* strategy */)
  ]
}
