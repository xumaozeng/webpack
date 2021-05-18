import less from "./index.less";
import logo from "./images/logo.png";

console.log(less.toString());

const img = new Image();
img.src = logo;
img.classList.add("logo");

const root = document.getElementById("root");
root.append(img);
