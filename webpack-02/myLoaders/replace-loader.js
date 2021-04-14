/**
 * loader的结构
 * loader本质上就是一个函数，不可以是箭头函数
 * loader必须有返回值，string或buffer
 * 如何返回多个信息
 * loader中存在异步逻辑如何处理
 * 多个loader处理
 */

module.exports = function (source) {
  return source.replace("webpack", "kkb");
};
