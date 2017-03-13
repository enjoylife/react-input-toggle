const { resolve, join } = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
    ghpages: join(__dirname, 'ghpages', 'index.js'),
    vendor: 'react'
  },
  context: resolve(__dirname),
  output: {
    path: join(__dirname, 'ghpages'),
    filename: '[name].js'
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ],
  node: { fs: 'empty' }
};
