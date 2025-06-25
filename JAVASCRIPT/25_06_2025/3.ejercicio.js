/* Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.

Recuerda usar la función .includes() para comprobar la palabra.

Puedes usar este array: */

const toys = [
  { id: 5, name: "Transformers" }, //0
  { id: 11, name: "LEGO" }, //1
  { id: 23, name: "Hot Wheels" }, //2
  { id: 40, name: "Rascador de gato" }, //3
  { id: 40, name: "FurReal Friends gato interactivo" }, //4
  { id: 60, name: "Nerf Blaster" }, //5
  { id: 71, name: "Sylvanian Families - Familia gato" }, //6
];

/* for (const toy of toys) {
  if (toy.name.includes("gato")) {
    toys.splice(toys.indexOf(toy), 1);
  }
}

console.log(toys);
 */
const newToys = [];

for (const toy of toys) {
  if (!toy.name.includes("gato")) {
    newToys.push(toy);
  }
}

console.log(newToys);
