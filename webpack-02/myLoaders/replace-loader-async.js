/**
 * loader的结构
 * loader本质上就是一个函数，不可以是箭头函数
 * loader必须有返回值，string或buffer
 * 如何返回多个信息
 * loader中存在异步逻辑如何处理
 */

module.exports = function (source) {
  console.log(this.query);
  // loader API
  // this.query
  const callback = this.async();
  setTimeout(() => {
    const content = source.replace("start", this.query.name);
    callback(null, content);
  }, 3000);

  //   this.callback(null, content);
  //   return source.replace("start", this.query.name);
};
