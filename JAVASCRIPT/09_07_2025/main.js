//Recuperamos el botón
const btn = document.querySelector("#btn");

/* const saludo = () => {
  console.log("Hola");
}; */

//Le añadimos un escuchador de eventos
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//

//Recupero el input y el h2
const myInput = document.querySelector("#myInput");
const h2 = document.querySelector("h2");

myInput.addEventListener("input", (ev) => {
  h2.textContent = ev.target.value;
});

//Ejemplo:
//https://codepen.io/lethamburn/pen/BaOKaZz
//Le vamos a añadir un evento resize a la ventana
window.addEventListener("resize", (ev) => {
  h2.textContent =
    ev.currentTarget.innerHeight + " x " + ev.currentTarget.innerWidth;
});

//Vamos a añadir un evento que se lance cuando todo el html, css y js se cargue por completo en el DOM
window.addEventListener("DOMContentLoaded", (ev) => {
  if (ev.currentTarget.innerWidth < 600) {
    document.body.innerHTML = `<h1>Comprate un ordenador, esto no es para moviles</h1>`;
  }
});
