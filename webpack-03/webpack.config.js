/**
 * webpack配置项
 */

const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const minicss = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "[name].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: {
          // loader: "file-loader",
          loader: "url-loader", // url-loader就是file-loader的变体，内部会自动调用file-loader
          options: {
            name: "[name].[ext]",
            outputPath: "images/", // 图片的输出位置，也就是存放位置
            publicPath: "../images/", // 图片的引用位置，css中如何引用图片
            // 图片的路径+图片的名称 ../images/ + logo.png
            limit: 1024 * 3 // 3KB，小于3kb使用url-loader，否则使用file-loader
          }
        }
      },
      {
        test: /\.woff2$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "css/",
            publicPath: "./"
          }
        }
      },
      {
        test: /\.less$/,
        use: [minicss.loader, "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new minicss({
      filename: "css/[name].css"
    }),
    new htmlwebpackplugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
