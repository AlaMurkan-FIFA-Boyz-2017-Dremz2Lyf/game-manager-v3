// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CreateMetadataPlugin = require('./create-metadata-plugin');

module.exports = require('./base.config')({
  // In production, we skip all hot-reloading stuff
  // no need for babel-polyfill because it should already be in the parent app
  entry: [
    path.join(process.cwd(), 'src/app/index.js'),
  ],

  // these dependencies should be exposed globally from the main app
  externals: {
    'react': 'React',
    'semantic-ui-react': 'SemanticUIReact',
    'modernizr': 'modernizr',
    'react-apollo': 'ReactApollo',
    'react-redux': 'ReactRedux',
    'react-router': 'ReactRouter',
  },

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
  },

  rules: [
  ],
  // transform css via css-loader and postcss, but don't put it in a separate file
  cssLoaders: [
    'style-loader',
    'css-loader?modules&sourceMap&minimize&importLoaders=1',
    'postcss-loader'
  ],


  devtool: 'source-map',

  plugins: [

    // OccurrenceOrderPlugin is needed for long-term caching to work properly.
    // See http://mxs.is/googmv
    new webpack.optimize.OccurrenceOrderPlugin(true),

    // Minify and optimize the JavaScript
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false, // ...but do not show warnings in the console (there is a lot of them),
      },
      sourceMap: true
    }),

    // copy metadata into dist
    new CreateMetadataPlugin(),
    // copy assets into dist
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "../../assets") }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        __DEVCLIENT__: 'false',
      },
    }),
  ],
});
