var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: path.join(__dirname, 'lib', 'index.js'),
  resolve: {
    root: path.join(__dirname)
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-input-toggle.js',
    sourceMapFilename: 'react-input-toggle.map',
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
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }

    ]
  }
}
