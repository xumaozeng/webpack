// style创建style标签，插入文档头部
const less = require("less");

module.exports = function (source) {
  return `
  const tag = document.createElement('style');
  tag.innerHTML = ${source};
  document.head.appendChild(tag);
  `;
};
