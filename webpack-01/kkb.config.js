const path = require("path");

module.exports = {
  entry: "./src/kkb.js",
  output: {
    path: path.resolve(__dirname, "./kkb"),
    filename: "bundle.js"
  }
};
