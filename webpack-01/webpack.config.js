/**
 * webpack的默认配置 0配置
 * webpack是基于node的构建工具
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 自动生成index.html
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除dist文件夹

module.exports = {
  /**
   * 什么是单入口应用spa：单页面应用
   * 什么是多入口应用mpa：多页面应用
   * 单页面应用-PC端的项目：
   * seo-搜索引擎优化
   * sem-搜索引擎营销
   */
  /**
   * 入口可以是string array object三种类型
   * sting类型的entry会在webpack内部转为object类型的entry，默认key值为main
   * 多入口  对应  多出口
   * chunk：代码片段
   */
  entry: "./src/index.js",
  /* entry: {
    // chunks：index、list
    index: "./src/index.js", // 两个模块（chunk） index a 
    list: "./src/list.js"
  }, */
  // 出口：注意多个入口对应多个出口
  output: {
    // 打包后的代码、文件存放位置，绝对路径
    path: path.resolve(__dirname, "./dist"),
    // 打包后的文件叫什么
    filename: "[name].js" // 占位符 [name] [id] [hash] [chunkhash] [contenthash]
  },
  /**
   * 打包模式：none、development、production
   * development：开发模式、注重开发体验，代码不会被压缩，输出信息比较多
   * production：启动TerserPlugin插件代码压缩，为模块和chunk启用混淆的名称
   * none：不启用任何优化
   */
  mode: "development",
  /**
   * loader 模块解析器
   * webpack 默认只支持js文件 json文件
   * .vue .css .scss .tsx等不支持需要loader解析
   */
  module: {
    rules: [
      {
        test: /\.css$/,
        // use:'css-loader'
        /**
         * 当多个loader作用于一个模块时，需要用数组
         * 需要注意顺序，自后往前
         * webpack 自定义loader的规范，一个loader最好只做一件事儿
         */
        use: ["style-loader", "css-loader"]
      }
      /* {
          test: /\.jpg$/,
          use:''
      }
      ... */
    ]
  },
  /**
   * plugin
   * webpack的功能扩展
   * 对输出目录做些优化
   */
  plugins: [
    new HtmlWebpackPlugin({
      // 有默认模板index.html
      title: "Webpack App",
      template: "./src/kkb.html",
      filename: "kkb.html"
    }),
    new CleanWebpackPlugin()
  ]
};
