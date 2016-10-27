module.exports = {
  entry: './public/js/index.jsx',
  output: {
    path: __dirname + '/public',
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
