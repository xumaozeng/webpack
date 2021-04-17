/**
 * webpack配置项
 */

const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
