### webpack优化

- tree-shake 摇树
  - css端
  - js端
  - html不需要
  - 副作用如何处理

- code-spliting

- webpack打包模式区分

  - 基于环境变量区分

    

- 线上部署文件压缩

  - css

  - js

  - html

    

### webpack打包公共库

公共库的目的，为了给他人使用，开源

```
output: {
	filename,
	path,
	library: '' // 指定公共库的名称，支持占位符
	libraryTarget: 'var' // 指定公共库打包出来的规范，var this window umd amd commonjs
}
```

```
externals
去除输出时打包文件中依赖的默认第三方模块
```

打包出两份文件

- 一份开发场景使用    未压缩
- 一份生产场景使用    压缩