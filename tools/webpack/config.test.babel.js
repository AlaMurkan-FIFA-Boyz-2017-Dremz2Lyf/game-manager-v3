const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader' },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]',
          'postcss-loader',
        ],
      },
      { test: /\.css$/, include: /node_modules/, loader: 'null-loader' },
    ],
  },
  // Some node_modules pull in Node-specific dependencies.
  // Since we're running in a browser we have to stub them out. See:
  // https://webpack.github.io/docs/configuration.html#node
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  // https://github.com/webpack/jade-loader/issues/8#issuecomment-55568520
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'src',
      'node_modules',
    ],
  },
  plugins: [
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        LAMBDA_URL: process.env.LAMBDA_URL,
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        __DEVCLIENT__: JSON.stringify(true),
      },
    }),
    new webpack.IgnorePlugin(/react\/addons/),
    new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
    new webpack.IgnorePlugin(/react\/lib\/ExecutionEnvironment/),
  ],
};
