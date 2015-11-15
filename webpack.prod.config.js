var path = require('path');
var webpack = require('webpack');
var EXAMPLES_DIR = path.resolve(process.cwd(), 'examples');

var WebpackErrorNotificationPlugin = require('webpack-error-notification');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    basic: 'lib'
  },
  resolve: {
    root: path.join(__dirname)
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-input-toggle.js',
    library: 'InputToggle',
    libraryTarget: 'umd'
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|react-a11y)/,
        loaders: ['babel']
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', "css!autoprefixer?browsers=last 2 versions!sass")
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?mimetype=image/svg+xml"
      }

    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), new ExtractTextPlugin("react-input-toggle.css"), new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    //  new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } })
  ]
}
