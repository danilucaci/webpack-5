const path = require("path");

const SOURCE_PATH = path.resolve("./src");
const ENTRY_FILE_PATH = path.join(SOURCE_PATH, "/index.js");
const DIST_PATH = path.resolve("./dist");

const WEBPACK_MODE = "none";

module.exports = {
  mode: WEBPACK_MODE,
  entry: {
    main: ENTRY_FILE_PATH,
  },
  output: {
    path: DIST_PATH,
    filename: "js/[name].js",
    chunkFilename: "js/[name].bundle.js",
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
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
