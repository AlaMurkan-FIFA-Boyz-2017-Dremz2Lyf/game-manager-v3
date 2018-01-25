const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack/config.test.babel');
const _ = require('lodash');

const reporters = ['mocha', 'coverage'];
const browsers = ['jsdom'];
if (process.env.SAUCE_ACCESS_KEY) {
  reporters.push('saucelabs');
  browsers.push('sauceFirefox45', 'sauceChrome', 'sauceIE11');
}

module.exports = (config) => {
  config.set({
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: browsers,

    colors: !process.env.NO_COLOR,
    concurrency: 3,
    customLaunchers: {
      sauceSafari10: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.11',
        version: '10.0',
      },
      sauceChrome: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'Windows 10',
      },
      sauceIOS: {
        base: 'SauceLabs',
        appiumVersion: '1.6.0',
        browserName: 'Safari',
        deviceName: 'iPhone 7 Simulator',
        deviceOrientation: 'portrait',
        platformVersion: '10.0',
        platformName: 'iOS',
      },
      sauceFirefox45: {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'Windows 10',
        version: '45',
      },
      sauceEdge13: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '13.10586',
      },
      sauceEdge14: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '14.14393',
      },
      sauceIE11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.103',
      },
    },
    sauceLabs: {
      testName: 'React Starter Kit Karma Tests',
      recordScreenshots: true,
    },
    captureTimeout: 120000,

    frameworks: ['mocha'],

    // Point karma at the test-bundler.js
    files: ['./test.bundler.js'],

    // Run karma through preprocessor plugins
    preprocessors: {
      './test.bundler.js': ['webpack']
    },
    webpack: webpackConfig,
    // Make Webpack bundle generation quiet
    webpackMiddleware: {
      stats: 'errors-only',
    },
    mochaReporter: {
      output: 'autowatch',
    },
    coverageReporter: {
      dir: path.join(process.cwd(), 'coverage'),
      subdir: function(browser) {
        // strip out version and spaces for better compatibility with windows
        return browser.toLowerCase().split(/[( /-]/).slice(0, 2).join('');
      },
      instrumenterOptions: {
        istanbul: { noCompact: true },
      },
      check: {
        global: {
          statements: 88,
          branches: 87,
          functions: 84,
          lines: 88,
        },
        each: {
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0,
        },
      },
      reporters: [
        { type: 'lcov' },
        // generates ./coverage/coverage-final.json
        { type: 'json' },
        { type: 'cobertura', file: 'cobertura.txt' },
        { type: 'text-summary' },
      ],
    },
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    // How long will Karma wait for a message from a browser before disconnecting
    // from it (in ms).
    browserNoActivityTimeout: 100000,

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage',
    // 'mocha' (added in plugins)
    reporters: reporters,

    client: {
      mocha: {
        timeout : 5000,
        reporter: 'html',   // change Karma's debug.html to mocha web reporter
        ui: 'bdd',
      },
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
  });
};
