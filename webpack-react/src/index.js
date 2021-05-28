/* import less from "./index.less";
import logo from "@/images/logo.png";
import App from "./App.jsx";

const img = new Image();
img.src = logo;
img.classList.add("logo");

const root = document.getElementById("root");
root.append(img);

const arr = [new Promise(() => {}), new Promise(() => {})];

arr.map(item => {
  console.log(item);
});

if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.error("Cannot apply HRM update.", err);
    }
  });
}
 */

export default function (a, b) {
  return a + b;
}
