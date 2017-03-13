const { resolve, join } = require('path');
const webpack = require('webpack');


module.exports = {
  entry: join(__dirname, 'lib', 'index.js'),
  context: resolve(__dirname),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'react-input-toggle.js',
    library: 'ReactInputToggle',
    libraryTarget: 'umd'
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
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
  node: { fs: 'empty' }
};
