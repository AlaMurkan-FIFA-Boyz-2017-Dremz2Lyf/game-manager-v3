const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT || 3000, 10);

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(process.cwd(), 'src/index.ejs'),
  hash: false,
});

const LoaderOptionsPluginConfig = new webpack.LoaderOptionsPlugin({
  options: {
    // see for options https://github.com/MoOx/eslint-loader
    eslint: {
      configFile: path.join(process.cwd(), '.eslintrc'),
      quiet: false,
      emitWarning: true,
      emitError: true,
      failOnError: false,
      failOnWarning: false,
      // community formatter
      formatter: require("eslint-friendly-formatter"),
      fix: false,
    },
    debug: true,
    minimize: false,
  },
});

// Style lint
const StyleLintPluginConfig = new StyleLintPlugin({
  configFile: path.join(process.cwd(), '.stylelintrc'),
  context: path.join(process.cwd(), 'src'),
  files: '**/*.?(sa|sc|c)ss',
  failOnError: false,  // Disable style lint error terminating here
});

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    __DEVCLIENT__: 'true',
  },
});

const getPlugins = () => {
  const plugins = [];
  plugins.push(LoaderOptionsPluginConfig);
  plugins.push(StyleLintPluginConfig);
  plugins.push(HTMLWebpackPluginConfig);
  plugins.push(DefinePluginConfig);
  plugins.push(new ExtractTextPlugin({ filename: 'app.css', allChunks: true }));
  plugins.push(new webpack.HotModuleReplacementPlugin()); // activates HMR
  plugins.push(new webpack.NamedModulesPlugin()); // prints more readable module names in the browser console on HMR updates
  return plugins;
};

const getEntry = () => {
  const entryFile = process.env.LOCAL ? 'src/app/index.js' : 'src/app/index.dev.js'
  let app = [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), entryFile),
  ]
  if (!process.env.LOCAL) {
    app.unshift('babel-polyfill')
  }
  const entry = {
    app
  };
  return entry;
};

// TODO update CSP to allow our s3 resources
const getCSPDirectives = () => {
  // valid values taken from https://content-security-policy.com/
  const cspDirectives = [
    'default-src \'self\'',
    'script-src \'self\' \'unsafe-inline\'',
    'img-src \'self\'',
    'style-src \'self\' dev-us-east-1-ouli-theme.stack.danteconsulting.com blob: \'unsafe-inline\' fonts.googleapis.com',
    'font-src \'self\' dev-us-east-1-ouli-theme.stack.danteconsulting.com data: fonts.gstatic.com',
    'connect-src \'self\' http://10.0.2.2:3000 ws://localhost:3000 ws://10.0.2.2:3000',
  ];
  cspDirectives.join('; ');
  return 'default-src *';
};

module.exports = require('./base.config')({
  devServer: {
    contentBase: 'static', // Relative directory for base of server
    hot: true, // Live-reload
    quiet: false,
    overlay: {
      errors: true,
    },
    noInfo: false,
    inline: true,
    lazy: false,
    publicPath: '/',
    historyApiFallback: true,
    port: port, // Port Number
    host: host, // Change to '0.0.0.0' for external facing server
    headers: {
      // X-Frame-Options response header improve the protection of web applications against Clickjacking.
      // reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options
      'X-Frame-Options': 'SAMEORIGIN',
      // This header enables the Cross-site scripting (XSS) filter in your browser.
      // https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#X-XSS-Protection
      'X-Xss-Protection': '1; mode=block',
      // Setting this header will prevent the browser from interpreting files as something else than declared by the content type in the HTTP headers
      // https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#X-Content-Type-Options
      'X-Content-Type-Options': 'nosniff',
    },
  },
  // Entry points to the project
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${host}:${port}`,
      'webpack/hot/only-dev-server',
      path.join(process.cwd(), 'src/app/index.js'),
    ]
  },
  devtool: process.env.FAST_SOURCEMAPS ? 'eval' : 'source-map',
  output: {
    filename: '[name].js',
    publicPath: '/', // necessary for HMR to know where to load the hot update chunks
    chunkFilename: '[name].chunk.js',
  },
  plugins: getPlugins(),
  // Load the CSS in a style tag in development
  cssLoaders: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        localIdentName: '[name]__[local]-[hash:base64:5]',
        modules: true,
        minimize: false,
        importLoaders: 0
      }
    },
    'postcss-loader',
  ],
  rules: [
    {
      test: /\.js$/,
      include: [path.resolve(process.cwd(), 'src')],
      exclude: /node_modules/,
      enforce: 'pre',
      loader: 'eslint-loader',
    },
  ]
});
