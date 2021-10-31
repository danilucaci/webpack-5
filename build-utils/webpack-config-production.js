const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getWebpackBabelConfig = require("./webpack-babel-config");

const DIST_PATH = path.resolve("./dist");

module.exports = function getWebpackProductionConfig() {
  return {
    output: {
      path: DIST_PATH,
      filename: "[name].[contenthash].js",
      chunkFilename: "[name].[contenthash].bundle.js",
      publicPath: "/",
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
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.hbs$/,
          use: ["handlebars-loader"],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[name].[contenthash].css",
      }),
    ],
  };
};
