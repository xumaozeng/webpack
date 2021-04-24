### Webpack 开发配置项



devtool选项：source-map开启源码映射模式，帮助开发者更快的定位错误的来源



webpack-dev-server: 安装yarn add webpack-dev-server@3.11.0 -D开启本地服务

当开启这个webpack-dev-server时，会自动接管webpack构建

此时webpack会把文件保存到本地内存中，读取更快

打开localhost:8080/ 会当前目录 /src/logo.png会显示图片

保存文件浏览器会自动刷新，—热更新



```javascript
devServer:{
	contentBase: './dist', // 输出目录
    port: 8081, // 端口
    open: true
}
```



是否有接口文档

我们前端需要等待服务端约定好接口，再进行联调

项目开始时候，前端和服务端约定好接口、接口字段以及接口文档和联调时间

前端在开发时候，就可以按照约定的接口、格式，做本地的数据mock

等到联调时候换下接口就行

HMR：热模块替换

当我们修改文件的时候，浏览器不刷新，但是其中模块的内容发生变化

第一步，开启devServer下的hot:true

第二步使用webpack自带的插件 HotModuleReplacementPlugin，这样css文件就修改不会刷新浏览器啦，模块内容自动更新，但是js模块修改还是刷新浏览器

- css模块
- js模块

不⽀持contenthash，chunkhash



babel：处理js模块 本身是一个JS编译器，把js代码编译为浏览器可以运行兼容的代码

支持ES6语法 兼容低版本浏览器

支持其他技术展 Vue JSX React TS

ES6语法 const let

ES6特性 promise



@babel/core babel-loader -D

@babel/preset-env 处理ES6语法

@babel/polyfill 处理ES6新特性