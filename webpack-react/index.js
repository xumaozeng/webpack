// 通过用户的环境变量，导出相应的版本文件
"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./umd/add-number.production.min");
} else {
  module.exports = require("./umd/add-number.development");
}
