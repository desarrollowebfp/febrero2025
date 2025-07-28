import "./style.css";
import { Header, Main, Footer } from "./components";
import addListeners from "./utils/listeners";

const init = () => {
  document.body.innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  //Primero me aseguro que toda la plantilla de HTML está reflejada en el documento
  init();
  //Añadimos los listeners
  addListeners();
});
