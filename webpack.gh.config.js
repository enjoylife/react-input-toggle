var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'ghpages', 'index.js'),
  resolve: {
    root: path.join(__dirname)
  },
  output: {
    path: path.join(__dirname, 'ghpages'),
    filename: 'ghpages.js',
    library: 'InputToggle',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|react-a11y)/,
        loaders: ['babel']
      }, {
        test: /\.scss$/,
        loaders: ["style", "css", 'autoprefixer?browsers=last 2 versions', "sass"]
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?mimetype=image/svg+xml"
      }

    ]
  },
  plugins: [new webpack.optimize.OccurenceOrderPlugin(), new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }), new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })]
}
