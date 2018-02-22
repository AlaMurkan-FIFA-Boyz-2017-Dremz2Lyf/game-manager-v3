/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

module.exports = options => ({
  devServer: options.devServer ? options.devServer: undefined,
  entry: options.entry,
  output: Object.assign({
    path: path.join(process.cwd(), 'client/dist/'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings
  module: {
    rules: options.rules.concat([
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        // Transform our own .css files with PostCSS and CSS-modules
        test: /\.css$/,
        exclude: /node_modules/,
        loader: options.cssLoaders,
      }, {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/vnd.ms-fontobject',
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      }, {
        test: /\.(gif|jpg|png)$/,
        // Any image below or equal to 10K will be converted to inline base64 instead
        loaders: [
          'url-loader?limit=10240',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            }
          },
        ],
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.yml$/,
        loader: 'json-loader!yaml-loader',
      }, {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader?limit=10000',
      },
    ]),
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        X_AUTH_TOKEN: JSON.stringify(process.env.X_AUTH_TOKEN),
        LAMBDA_URL: JSON.stringify(process.env.LAMBDA_URL),
        VERSION: JSON.stringify(process.env.GIT_COMMIT || 'development'),
        HOT_RELOAD: process.env.HOT_RELOAD || 'false',
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: process.cwd(), // root of the web app, required for the sourceMap of css/sass loader,
      },
    }),
  ]),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'src',
      'node_modules',
    ],
  },
  node: {
    fs: "empty",
    dns: 'mock',
    net: 'mock',
    tls: 'mock'
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: 'errors-only', // Don't show stats in the console
});
