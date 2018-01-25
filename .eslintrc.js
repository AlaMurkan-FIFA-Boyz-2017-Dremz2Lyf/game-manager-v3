module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "commonjs": true
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "rules": {
    "linebreak-style": 0,
    "max-len": [1, 140, 2, {"ignoreComments": true}],
    "quote-props": [1, "consistent-as-needed"],
    "no-cond-assign": [2, "except-parens"],
    "space-infix-ops": 0,
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "default-case": 0,
    "no-else-return": 0,
    "no-param-reassign": 0,
    "react/prop-types": 1,
    "comma-dangle": 1,
    "indent": 1,
    "react/require-default-props": 0,
    "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
    "class-methods-use-this": 2,
    "react/jsx-indent-props": 1,
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "react/jsx-closing-bracket-location": 1,
    "object-curly-spacing": 1,
    "arrow-body-style": 1,
    "no-console": 1,
    "prefer-template": 1,
    "import/no-unresolved": 1,
    // NOTE: Turning off this rule for now, need to figure out how shared dependencies are going to work.
    "import/no-extraneous-dependencies": [0, {"devDependencies": ["**/*.test.js"]}],
    "global-require": 1,
    "react/no-unused-prop-types": 0,  //due to bug https://github.com/yannickcr/eslint-plugin-react/issues/811
    "no-underscore-dangle": 0,
    "react/forbid-prop-types": 0,
    "new-cap": 0
  },
  "globals": {}
};
