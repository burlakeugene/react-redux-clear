const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CLIENT_CONFIGS_DIR = path.resolve(__dirname, './config');
const CONFIG_NAME = (process.env.CONFIG_NAME = process.env.CONFIG_NAME.trim());

function getJSONConfig() {
  let commonConfig = require(CLIENT_CONFIGS_DIR + '/common.json');
  let configPath = require(CLIENT_CONFIGS_DIR + '/' + CONFIG_NAME + '.json');
  return Object.assign(commonConfig, configPath);
}

const JSON_CONFIG = getJSONConfig();
const isDevelopment = process.env.WEBPACK_DEV_SERVER === 'true';
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: JSON_CONFIG.publicPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.pdf$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /jsx/,
            use: ['@svgr/webpack'],
          },
          {
            use: 'url-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: __dirname + '/src/app/components',
      containers: __dirname + '/src/app/containers',
      actions: __dirname + '/src/app/actions',
      store: __dirname + '/src/app/store',
      layouts: __dirname + '/src/app/layouts',
      assets: __dirname + '/src/app/assets',
      hooks: __dirname + '/src/app/hooks',
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new FaviconsWebpackPlugin('./src/favicon.svg'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      APP_CONFIG: JSON.stringify(JSON_CONFIG),
      title: JSON_CONFIG.name,
    }),
  ],
};
