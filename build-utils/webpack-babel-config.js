const path = require("path");

const SOURCE_PATH = path.resolve("./src");

module.exports = function getWebpackBabelConfig() {
  return {
    test: /\.js$/,
    exclude: "/node_modules",
    include: SOURCE_PATH,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
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
  };
};
