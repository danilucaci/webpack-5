const path = require("path");

const BUILD_DIR_PATH = path.resolve("./build");

module.exports = function getWebpackModeConfig(mode = "production") {
  const FILE_NAME = `webpack-config-${mode}`;
  const FILE_PATH = path.join(BUILD_DIR_PATH, FILE_NAME);

  return require(FILE_PATH)();
};
