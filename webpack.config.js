const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// require('babel-register');

const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|ico|gif|ttf)$/,
        use: [{ loader: 'url-loader', options: { limit: 5000 } }],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Planetari mòbil',
      template: './public/index.html',
      filename: 'index.html',
      hash: true,
      favicon: './src/assets/images/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  watch: true,
  devtool: 'source-map',
};
