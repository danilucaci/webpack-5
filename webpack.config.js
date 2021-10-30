const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const SOURCE_PATH = path.resolve("./src");
const ENTRY_FILE_PATH = path.join(SOURCE_PATH, "/index.js");
const DIST_PATH = path.resolve("./dist");

module.exports = (env, { mode = "development" }) => {
  return {
    mode: mode,
    entry: {
      main: ENTRY_FILE_PATH,
    },
    output: {
      path: DIST_PATH,
      filename: "[name].js",
      chunkFilename: "[name].bundle.js",
      publicPath: "dist/",
    },
    module: {
      rules: [
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
        {
          test: /\.js$/,
          exclude: "/node_modules",
          include: SOURCE_PATH,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/env",
                  {
                    useBuiltIns: "usage",
                    corejs: "3",
                    modules: false,
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
    optimization: {
      runtimeChunk: "single",
    },
  };
};
