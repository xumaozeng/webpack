const autoprefixer = require("autoprefixer");
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const htmlwebpackplugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const base = require("./webpack.base.config");

const devConfig = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    hot: true,
    open: true,
    proxy: {
      "/api": {
        target: "https://www.baidu.com/",
        secure: false,
        pathRewrite: { "^/api": "" }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: ["last 2 versions", ">1% "]
                  })
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new htmlwebpackplugin({
      title: "Webpack React",
      template: "./src/index.html"
    })
  ]
};

module.exports = merge(base, devConfig);
