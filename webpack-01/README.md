### Webpack核心概念

- 什么是webpack：模块解析器-工具

  - vue
  - jsx
  - ts

- webpack的安装

  - 全局安装
    - yarn add webpack webpack-cli -g 不推荐！！！
      - 全局安装 版本会固定！升级需要手动！！！
      - 假如手上有多个项目（新的，旧的，导致webpack版本不一致，有的3.x 4.x 5.x）
  - 局部安装 项目安装 推荐！
    - 安装4版本 yarn add webpack@4.43.0 webpack-cli@3.3.12 -D
    - 校验安装成功 npx webpack -v  
  - webpack4.x支持零配置启动
    - 默认配置文件名webpack.config.js 
    - 默认入口src/index.js，出口dist/main.js

- webpack的核心概念

  - chunk代码片段
    - index
      - a.js
    - list
      - 没有依赖
  - 打包过程有chunks的概念，根据入口文件来区分chunk
  - module模块的意思，nodeJS万物皆模块
  - chunk-是代码片段
  - bundle文件-打包后的产物！！！

  

  一个chunks至少包含一个模块

  一个bundle包含一个chunks

  要记住chunk是代码片段，文件是bundle

  loader是对chunk的二次加工

  

webpack把非js和json的文件处理成string buffer

entry

output

mode

loader

plugin

chunk

bundle

module

