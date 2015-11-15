var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
module.exports = function (config) {
  config.set({

    browsers: [process.env.CONTINUOUS_INTEGRATION
        ? 'Firefox'
        : 'Chrome'],

    singleRun: false,

    frameworks: [
      'mocha', 'should-sinon', 'should', 'sinon'
    ],

    files: ['tests.webpack.js'],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: ['dots'],

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    }

  });
};
