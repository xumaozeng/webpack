/**
 * 多页面打包方案
 * 多入口entry
 *
 * key chunks
 * 循环遍历对象，动态的实例化htmlwebpackplugin
 */

/**
 * webpack配置项
 */

const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const minicss = require("mini-css-extract-plugin");

const glob = require("glob");
const setMPA = () => {
  const entry = {};
  const htmlwebpackplugins = [];
  // 页面路径 glob通配符
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
  //   console.log(entryFiles);
  entryFiles.forEach((item, index) => {
    const entryFile = item;
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    // console.log(match);
    const pageName = match[1];
    entry[pageName] = item;
    htmlwebpackplugins.push(
      new htmlwebpackplugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName]
      })
    );
  });

  //返回entry和htmlwebpackplugins
  return {
    entry,
    htmlwebpackplugins
  };
};

const { entry, htmlwebpackplugins } = setMPA();

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname + "/mpa"),
    filename: "[name]-[chunkhash:6].js"
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
      filename: "css/[name]-[contenthash:6].css"
    }),
    new CleanWebpackPlugin(),
    ...htmlwebpackplugins
  ]
};
