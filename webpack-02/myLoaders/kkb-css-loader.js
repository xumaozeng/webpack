// css序列化
const less = require("less");

module.exports = function (source) {
  return JSON.stringify(source);
};
