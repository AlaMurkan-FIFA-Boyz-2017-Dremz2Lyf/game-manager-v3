module.exports = {
  plugins: [
    require('postcss-cssnext'),
    require('postcss-focus')({
      // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
    require('postcss-reporter')({
      // Posts messages from plugins to the terminal
      clearMessages: true,
    }),
  ]
};
