// global.Promise         = require('bluebird');

const webpack            = require('webpack');
const path               = require('path');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const publicPath         = '/';
const cssName            = process.env.NODE_ENV === 'production' ? 'assets/styles/[name]-[hash].css' : 'assets/styles/[name].css';


const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER:  JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: process.env.NODE_ENV !== 'production'
  }),
  new ExtractTextPlugin(cssName),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1
  }),
  new FaviconsWebpackPlugin({
    logo: './src/images/favicon-min.png',
    prefix: 'assets/images/favicon/',
    title: 'portfolio',
    background: '#23262c'
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html')
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer'
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CleanWebpackPlugin(['assets/', 'index.html'], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  );
}

module.exports = {
  entry: {
    'client': ['babel-polyfill', './src/client.js']
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: process.env.NODE_ENV === 'production' ? 'assets/js/[name].[chunkhash].js' : 'assets/js/[name].js',
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
      { test: /\.pdf$/, loader: 'file?name=[name].[ext]' },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]?[hash]',
          publicPath: '/'
        }
      },
      { test: /\.jsx?$/,
        loader: process.env.NODE_ENV !== 'production' ? 'react-hot-loader!babel-loader' : 'babel-loader',
        exclude: [/node_modules/, /public/]
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true
  },
  devtool: process.env.NODE_ENV !== 'production' ? '#eval-source-map' : false
};
