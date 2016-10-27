const Path = require('path');

module.exports = {
  entry: './public/js/index.jsx',
  output: {
    path: Path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
    ],
  },
};
