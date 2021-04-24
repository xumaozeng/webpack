class txtwebpackplugin {
  constructor(options) {}

  // 注册钩子
  apply(compiler) {
    compiler.hooks.emit.tapAsync("txtwebpackplugin", (compliation, cb) => {
      compliation.assets["new.txt"] = {
        source: function () {
          // 资源的内容
          return "hello 自定义plugins";
        },
        size: function () {
          // 资源的大小
          return 1024;
        }
      };
      cb();
    });
  }
}

module.exports = txtwebpackplugin;
