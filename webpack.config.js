const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [new Dotenv()],
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['/dist', '/node_modules/'],
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: ['/dist', '/node_modules/'],
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
