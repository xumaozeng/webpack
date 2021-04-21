// import css from "./index.css";
import less from "./index.less";
import axios from "axios";
import counter from "./counter";
import number from "./number";

counter();
number();

if (module.hot) {
  module.hot.accept("./number.js", () => {
    /**
     * 先找到number模块
     * 删
     * 重新生成
     */
    document.body.removeChild(document.getElementById("number"));
    number();
  });
}

/* axios.get("/api/info").then(res => {
  console.log(res);
});
console.log("hello xiaoxu");

const btn = document.createElement("button");
btn.innerHTML = "新增";
document.body.appendChild(btn);

btn.onclick = function () {
  const div = document.createElement("div");
  div.innerHTML = "item";
  document.body.appendChild(div);
}; */
