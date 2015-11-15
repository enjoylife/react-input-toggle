var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'inline';
webpackConfig.entry = {};
var extraLoader = {
  test: /\.(js|jsx)$/,
  exclude: /(test|node_modules|bower_components)\//,
  loader: 'isparta'
};
webpackConfig.module.preLoaders.push(extraLoader)

var path = require('path');

module.exports = function (config) {
  config.set({

    browsers: process.env.CONTINUOUS_INTEGRATION
      ? ['Firefox']
      : [
        'Chrome', 'Firefox'
      ],

    singleRun: false,

    frameworks: [
      'mocha', 'chai'
    ],

    files: [path.resolve(__dirname, 'tests.webpack.js')],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },

    reporters: [
      'progress', 'coverage'
    ],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {
          type: 'html',
          subdir: 'html'
        }, {
          type: 'lcovonly',
          subdir: 'lcov'
        }
      ]
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    }

  });
};
