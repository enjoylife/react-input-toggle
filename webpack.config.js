const { resolve } = require('path');
const webpack = require('webpack');

var WebpackNotifierPlugin = require('webpack-notifier');

// webpack 2
module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './ghpages/index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'ghpages.js',
    // the output bundle

    path: resolve(__dirname, 'ghpages'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname),

  resolve: {
    modules: [
      resolve(__dirname, "lib"),
      "node_modules"
    ],
  },


  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'ghpages'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?mimetype=image/svg+xml"
      }
    ],
  },
  node: { fs: 'empty' },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new WebpackNotifierPlugin(),
    // display build status system notifications

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};
