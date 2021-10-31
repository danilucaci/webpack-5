const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SOURCE_PATH = path.resolve("./src");

const INDEX_PAGE_NAME = "index";
const IMAGES_PAGE_NAME = "images";
const PAGE_TEMPLATE_FILE_EXTENSION = "hbs";

const INDEX_PAGE_FILE_PATH = path.join(
  SOURCE_PATH,
  "/pages",
  `${INDEX_PAGE_NAME}.js`
);
const IMAGES_PAGE_FILE_PATH = path.join(
  SOURCE_PATH,
  "/pages",
  `${IMAGES_PAGE_NAME}.js`
);
const INDEX_HTML_TEMPLATE_FILE_PATH = path.join(
  SOURCE_PATH,
  "webpack-page-templates",
  `${INDEX_PAGE_NAME}.${PAGE_TEMPLATE_FILE_EXTENSION}`
);
const IMAGES_HTML_TEMPLATE_FILE_PATH = path.join(
  SOURCE_PATH,
  "webpack-page-templates",
  `${IMAGES_PAGE_NAME}.${PAGE_TEMPLATE_FILE_EXTENSION}`
);

module.exports = function getWebpackCommonConfig(mode = "production") {
  return {
    mode: mode,
    entry: {
      [INDEX_PAGE_NAME]: INDEX_PAGE_FILE_PATH,
      [IMAGES_PAGE_NAME]: IMAGES_PAGE_FILE_PATH,
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
        chunks: [INDEX_PAGE_NAME],
        filename: "index.html",
        title: "Index",
        description: "Home || My super awesome app made with Webpack 5",
        template: INDEX_HTML_TEMPLATE_FILE_PATH,
      }),
      new HtmlWebpackPlugin({
        chunks: [IMAGES_PAGE_NAME],
        filename: "images.html",
        title: "Images",
        description: "Images || My super awesome app made with Webpack 5",
        template: IMAGES_HTML_TEMPLATE_FILE_PATH,
      }),
    ],
  };
};
