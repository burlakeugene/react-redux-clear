const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

//config
const ROOT_DIR = __dirname;
const CLIENT_CONFIGS_DIR = path.resolve(ROOT_DIR, "./config");
const CONFIG_NAME = (process.env.CONFIG_NAME = process.env.CONFIG_NAME.trim());

function getJSONConfig() {
  let commonConfig = require(CLIENT_CONFIGS_DIR + "/common.json");
  let configPath = require(CLIENT_CONFIGS_DIR + "/" + CONFIG_NAME + ".json");
  return Object.assign(commonConfig, configPath);
}

const JSON_CONFIG = getJSONConfig();

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(ROOT_DIR, "/dist"),
    publicPath: JSON_CONFIG.publicPath,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["absolute/path/a", "absolute/path/b"]
            }
          }
        ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      APP_CONFIG: JSON.stringify(JSON_CONFIG),
      title: JSON_CONFIG.name
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/favicon.svg"
    })
  ]
};
