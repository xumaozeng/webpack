/**
 * webpack配置项
 */

const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const glob = require("glob"); // 通配操作
const setMPA = () => {
  const entry = {};
  const htmlwebpackplugins = [];
  // 页面路径
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
  // 遍历操作
  entryFiles.forEach((item, index) => {
    const entryFile = item;
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match[1];
    entry[pageName] = entryFile;
    htmlwebpackplugins.push(
      new htmlwebpackplugin({
        template: path.join(__dirname, `src/${pageName}`),
        filename: `${pageName}.html`,
        chunks: [pageName]
      })
    );
  });
  return {
    entry,
    htmlwebpackplugins
  };
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "[name].js"
  },
  mode: "development",
  module: {},
  plugins: [
    new htmlwebpackplugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
