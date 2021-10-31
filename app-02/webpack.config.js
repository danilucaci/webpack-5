const { merge } = require("webpack-merge");

const getWebpackCommonConfig = require("./build-utils/webpack-common-config");
const getWebpackModeConfig = require("./build-utils/webpack-mode-config");

module.exports = function webpackConfig(_env, { mode = "development" }) {
  const commonConfig = getWebpackCommonConfig(mode);
  const modeConfig = getWebpackModeConfig(mode);

  const mergedConfig = merge(commonConfig, modeConfig);

  return mergedConfig;
};
