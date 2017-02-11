const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/app.js'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    modules: [
      path.join(__dirname, "src"),
      'node_modules',
      'bower_components'
    ]
  },

  module: {
    rules: [
      {
        test: require.resolve(path.join(__dirname, 'bower_components/gapless5/gapless5')),
        use: 'exports-loader?Gapless5'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jason Kim - Software Engineer in Seattle',
      filename: 'index.html',
      template: 'src/index.ejs'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new UglifyJSPlugin({
      compress: {
        warnings: true
      }
    })
  ]
};
