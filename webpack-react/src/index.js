import less from "./index.less";
import logo from "./images/logo.png";

console.log(less);

const img = new Image();
img.src = logo;
img.classList.add("logo");

const root = document.getElementById("root");
root.append(img);

if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.error("Cannot apply HRM update.", err);
    }
  });
}
