const autoprefixer = require("autoprefixer");
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const minicss = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const htmlwebpackplugin = require("html-webpack-plugin");
const terserplugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    "add-number.production.min": "./src/index.js",
    "add-number.development": "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./umd"),
    filename: "[name].js",
    library: "addNumber",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  mode: "none",
  optimization: {
    minimize: true,
    minimizer: [
      new terserplugin({
        test: /\.min\.js$/
      })
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "./node_modules")],
    alias: {
      "@": path.join(__dirname, "./src"),
      react: path.resolve(
        __dirname,
        "./node_modules/react/umd/react.production.min.js"
      ),
      "react-dom": path.resolve(
        __dirname,
        "./node_modules/react-dom/umd/react-dom.production.min.js"
      )
    }
  },
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
          // "style-loader",
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
      },
      {
        test: /\.js[x]?$/,
        include: [path.resolve(__dirname, "src")],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1"
                  },
                  corejs: 2,
                  useBuiltIns: "usage"
                }
              ],
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new minicss({
      filename: "css/[name]_[contenthash:6].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin()
    /* new htmlwebpackplugin({
      title: "Webpack React",
      template: "./src/index.html"
    }) */
  ]
};
