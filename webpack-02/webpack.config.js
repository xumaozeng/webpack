const path = require("path");
const minicss = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  mode: "development",
  resolveLoader: {
    modules: ["node_modules", "./myLoaders"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["kkb-style-loader", "kkb-css-loader", "kkb-less-loader"]
      },
      /* {
        test: /\.less$/,
        use: [
          //   "style-loader",
          minicss.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }, */
      {
        test: /\.js$/,
        use: [
          {
            loader: "replace-loader-async",
            options: {
              name: "开课吧"
            }
          },
          "replace-loader"
        ]
      }
    ]
  },
  plugins: [
    new minicss({
      filename: "[name].css"
    })
  ]
};
