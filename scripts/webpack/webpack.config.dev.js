var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var config = require('./webpack.config.base');

var rootPath = path.resolve(__dirname, '../../');

config.entry = {
  index: [
    rootPath + '/examples/index.js'
  ]
}

config.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader'
    },
  ],
});

config.module.rules.push({
  test: /\.scss$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader'
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [
          require('autoprefixer')({
            browsers: [
              'last 3 versions',
              'ie >= 9',
              'ie_mob >= 10',
              'ff >= 30',
              'chrome >= 34',
              'safari >= 6',
              'opera >= 12.1',
              'ios >= 6',
              'android >= 4.4',
              'bb >= 10',
              'and_uc 9.9',
            ],
          }),
        ]
      },
    },
    {
      loader: 'sass-loader'
    },
  ],
});


if(config.plugins) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: rootPath + '/examples/index.html',
      chunks: ['index']
    })
  );
}

config.devServer = {
  publicPath: '/',
  historyApiFallback: true,
  quiet: true,
};

module.exports = config;
