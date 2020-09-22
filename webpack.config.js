const NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
  },
  entry: './src/main.js',
  mode: NODE_ENV,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}
