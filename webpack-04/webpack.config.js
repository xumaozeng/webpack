const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const minicss = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "[name]-[hash:6].js"
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist", // 输出目录
    port: 8081, // 端口
    open: true, // 自动打开浏览器
    hot: true, // 开启热替换
    hotOnly: true, // 关闭浏览器的自动刷新
    proxy: {
      "/api": {
        target: "http://localhost:9092/"
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [minicss.loader, "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new htmlwebpackplugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
    new minicss({
      filename: "css/[name].css"
    }),
    new HotModuleReplacementPlugin()
  ]
};
