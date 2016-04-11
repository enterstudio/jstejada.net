const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const sassLoaders = [
  'css?sourceMap',
  'sass?sourceMap&' +
    'includePaths[]=' +
      encodeURIComponent(path.resolve(__dirname, './src/styles')) + '&' +
    'includePaths[]=' +
      encodeURIComponent(path.resolve(__dirname, './node_modules')),
  'postcss',
];

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', sassLoaders.join('!')),
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel?' +
            'cacheDirectory&' +
            'presets[]=react,presets[]=es2015,presets[]=stage-0',
          'eslint',
        ],
      },
      {
        test: /\.html$/,
        loaders: ['file-loader?name=[path][name].[ext]&context=./public'],
      },
    ],
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ],
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
      path.resolve('./public'),
    ],
    extensions: ['', '.js', '.json', '.jsx', '.scss'],
  },
};
