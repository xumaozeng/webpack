const autoprefixer = require("autoprefixer");
const path = require("path");
const minicss = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlwebpackplugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const base = require("./webpack.base.config");

const prodConfig = {
  mode: "production",
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          minicss.loader,
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
    new minicss({
      filename: "css/[name]_[contenthash:6].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(),
    new htmlwebpackplugin({
      title: "Webpack React",
      template: "./src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
};

module.exports = merge(base, prodConfig);
