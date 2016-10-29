const Path = require('path');

module.exports = {
  entry: './build/public/components/Index.js',
  output: {
    path: Path.join(__dirname, 'build/public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
