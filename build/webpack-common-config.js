const path = require("path");

const SOURCE_PATH = path.resolve("./src");
const ENTRY_FILE_PATH = path.join(SOURCE_PATH, "/index.js");

module.exports = function getWebpackCommonConfig(mode = "production") {
  return {
    mode: mode,
    entry: {
      main: ENTRY_FILE_PATH,
    },
    optimization: {
      runtimeChunk: "single",
    },
  };
};
