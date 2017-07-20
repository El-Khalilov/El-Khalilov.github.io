// global.Promise         = require('bluebird');

const webpack            = require('webpack');
const path               = require('path');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const publicPath         = 'http://localhost:8050/public/assets';
const cssName            = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
const jsName             = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';


const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER:  JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new webpack.LoaderOptionsPlugin({
    debug: process.env.NODE_ENV !== 'production'
  }),
  new ExtractTextPlugin(cssName)
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CleanWebpackPlugin([ 'public/assets/' ], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  );
}

module.exports = {
  entry: ['babel-polyfill', './src/client.js'],
  output: {
    path: path.resolve(__dirname, './public/assets/'),
    filename: jsName,
    publicPath
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions:  ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          'fallback': 'style-loader',
          'use': [
            'css-loader',
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          'fallback': 'style-loader',
          'use': [
            'css-loader',
            {
              loader: 'postcss-loader'
            },
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  './src/styles/_variables.scss',
                  './src/styles/_mixins.scss',
                  './src/styles/_media.scss'
                ]
              }
            }
          ]
        })
      },
      { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
      { test: /\.jsx?$/,
        loader: process.env.NODE_ENV !== 'production' ? 'react-hot-loader!babel-loader' : 'babel-loader',
        exclude: [/node_modules/, /public/]
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false
};
