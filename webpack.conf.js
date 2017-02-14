var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    calculator: './src/index.js',
    jquery: './src/jquery.js'
  },
  output: {
    path: './build/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      compress: {
        dead_code: true
      },
      beautify: true,
      mangle: false
    })
  ]
};