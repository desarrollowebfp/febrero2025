/* //AÑADIR 
localStorage.setItem("theme", "dark")

//GET
console.log(localStorage.getItem("theme"))

//ELIMINAR
localStorage.removeItem("theme")

//CLEAR
localStorage.clear(); */

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌑";
  }
});

let collection = [];
//
document.querySelector("#addBtn").addEventListener("click", () => {
  const value = document.querySelector("#textvalue").value;
  collection.push(value)
  localStorage.setItem("collection", JSON.stringify(collection));
  document.querySelector("#textvalue").value = "";
  console.log(collection)
  renderItems(collection);
});

//
const renderItems = (list) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  for (const item of list) {
    container.innerHTML += `<li>${item}</li>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme")) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.className = "dark";
      themeBtn.textContent = "☀️";
    }
  }

  if (localStorage.getItem("collection")) {
    const savedCollection = JSON.parse(localStorage.getItem("collection"));
    collection = savedCollection;
    renderItems(collection);
  }
});
