const NODE_ENV = process.env.NODE_ENV || 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/main.html',
});
const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
  },
  entry: {
    main: ['./src/main.js', './src/main.scss'],
  },
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]',
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [htmlWebpackPlugin],
};
