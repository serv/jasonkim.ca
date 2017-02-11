module.exports = {
  "env": {
    "browser": true,
    "jquery": true
  },
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "no-unused-vars": ["error", { "varsIgnorePattern": "Ignored"}],
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-webpack-loader-syntax": 0
  },
  "settings": {
    "import/external-module-folders": ['bower_components']
  }
};