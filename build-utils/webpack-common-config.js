const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SOURCE_PATH = path.resolve("./src");
const ENTRY_FILE_PATH = path.join(SOURCE_PATH, "/index.js");
const HTML_TEMPLATE_FILE_PATH = path.join(SOURCE_PATH, "/index.hbs");

module.exports = function getWebpackCommonConfig(mode = "production") {
  return {
    mode: mode,
    entry: {
      main: ENTRY_FILE_PATH,
    },
    optimization: {
      runtimeChunk: "single",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "My awesome app",
        description: "My super awesome app made with Webpack 5",
        template: HTML_TEMPLATE_FILE_PATH,
      }),
    ],
  };
};
