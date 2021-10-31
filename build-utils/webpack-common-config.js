const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InjectBodyPlugin = require("inject-body-webpack-plugin").default;

const SOURCE_PATH = path.resolve("./src");
const INDEX_PAGE_NAME = "index";
const MAIN_ENTRY_FILE_PATH = path.join(SOURCE_PATH, `${INDEX_PAGE_NAME}.js`);

module.exports = function getWebpackCommonConfig(mode = "production") {
  return {
    mode: mode,
    entry: {
      main: MAIN_ENTRY_FILE_PATH,
    },
    optimization: {
      runtimeChunk: "single",
      chunkIds: "named",
      moduleIds: "named",
      splitChunks: {
        chunks: "all",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        title: "Index",
        description: "Home || My super awesome app made with Webpack 5",
        mobile: true,
        lang: "en-US",
      }),
      new InjectBodyPlugin({
        content: "<div id=root></div>",
      }),
    ],
  };
};
