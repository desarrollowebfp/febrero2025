//Recupero los elementos existentes
const todoInput = document.querySelector("#todo_input");
const todoBtn = document.querySelector("#todo_btn");
const todoContainer = document.querySelector("#todo_container");

//Añadirle un evento click al botón
todoBtn.addEventListener("click", () => {
  //Recuperamos el valor del input
  const value = todoInput.value;
  //Creamos un li
  const li = document.createElement("li");
  //Creamos un parrafo que va dentro del li
  const p = document.createElement("p");
  p.textContent = value;
  //Metemos el parrafo en el li
  li.appendChild(p);
  //Creamos un botón para borrar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  //Le añadimos a cada botón un evento click
  deleteBtn.addEventListener("click", () => {
    if (confirm("¿Seguro que quieres borrar el todo?")) {
      li.remove();
    }
  });
  //Metemos el botón en el li
  li.appendChild(deleteBtn);
  //Metemos el li en el contenedor
  todoContainer.appendChild(li);
  //Vaciamos el input al terminar
  todoInput.value = "";
});
