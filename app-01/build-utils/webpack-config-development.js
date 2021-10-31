const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const getWebpackBabelConfig = require("./webpack-babel-config");

const DIST_PATH = path.resolve("./dist");

module.exports = function getWebpackDevelopmentConfig() {
  return {
    output: {
      path: DIST_PATH,
      filename: "[name].js",
      chunkFilename: "[name].bundle.js",
      publicPath: "/",
    },
    devServer: {
      compress: true,
      port: 5000,
      hot: true,
      historyApiFallback: true,
      static: {
        directory: DIST_PATH,
      },
      devMiddleware: {
        // writeToDisk: true,
        index: "index.html",
      },
      client: {
        overlay: true,
      },
    },
    module: {
      rules: [
        getWebpackBabelConfig(),
        {
          test: /\.(jpg|png)$/,
          type: "asset/resource",
        },
        {
          test: /\.txt$/,
          type: "asset/source",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
  };
};
