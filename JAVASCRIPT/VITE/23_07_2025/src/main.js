import "./style.css";
import Header from "./components/Header/Header";
import Avatar from "./components/Avatar/Avatar";

document.querySelector("#app").innerHTML = `
    ${Header("Vite Components")}
    ${Avatar("Goro Majima")}
    ${Avatar("Kazuma Kyriu", "https://cdn.costumewall.com/wp-content/uploads/2018/10/kazuma-kirya.jpg")}
    ${Avatar("Spiderman")}
    ${Avatar("Cloud", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBv-v7y2lwFD-sUrCVy_9QM6I_x0rStmtpkQ&sƒ")}

`;
