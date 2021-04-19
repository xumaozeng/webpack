### Webpack 工程化实战



1. 静态资源处理-图片 第三方字体
2. 图片的使用方式
   - js中使用dom插入src
   - css中使用url

3. 第三方字体的使用，iconfront





浏览器客户端 第一次访问一个静态资源链接

浏览器客户端是有缓存文件的

第1次

http://www.kaikeba.com/css/index.css

第2次

读取缓存

更新！！！上传到服务器

http://www.kaikeba.com/css/index.css?v=123

客户端没有生效！！！

这时候浏览器去更新本地缓存！！！

强制刷新！！！要求是无理的

这就要使用指纹策略—指代?v=123类似



CDN就是一个服务器—分布式服务器，有很多节点如华东、上海节点做静态资源部署



指纹策略

webpack中三种指纹策略

- hash：作用范围最大，整个工程只要内容有更新会变化，包括多页面入口也是一样的，修改任何一个入口文件都会变化

- chunkhash：影响范围就是一个chunks

- contenthash：自身内容更新，hash才会更新

  

多页面用chunkhash，单页面用hash，资源文件用contenthash



多页面打包方案

- 如何动态生成entry
- key chunks的名称
- 循环遍历对象，动态实例化htmlwebpackplugin