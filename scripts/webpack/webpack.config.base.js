var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    })
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "react", "stage-0"],
            plugins: [
              'transform-object-assign',
            ]
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:8].[ext]',
            },
          },
        ],

      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  node: {
    console: 'mock'
  }
};
