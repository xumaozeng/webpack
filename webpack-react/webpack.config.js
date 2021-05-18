const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js"
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
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]-[hash:6].[ext]",
            outputPath: "images/",
            limit: 1024 * 3
          }
        }
      }
    ]
  }
};
