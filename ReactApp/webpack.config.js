var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3001',
    // 'webpack/hot/only-dev-server',
    'babel-polyfill', // Adds 300kB
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      // loaders: ['react-hot', 'babel'],
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
