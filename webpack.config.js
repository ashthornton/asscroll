require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'asscroll': path.resolve(__dirname, 'src/index.js'),
    'asscroll.min': path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    library: 'ASScroll',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    browsers: [
                      '> 0.25%',
                      'edge >= 14',
                      'not dead',
                      'not ie 11',
                      'not op_mini all'
                    ]
                  },
                  corejs: 3,
                  useBuiltIns: 'usage'
                }]
              ]
            }
          },
          'eslint-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
        test: /\.min.js$/
    })],
  }
};