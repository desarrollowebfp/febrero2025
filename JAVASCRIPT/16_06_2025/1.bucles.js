for (let i = 1; i <= 4; i++) {
  console.log("Hola", i);
}

console.log("//");
//LANZAMOS EL SCRIPT
// i = 0, true, sumamos uno al final -> Hola 0
// i = 1, true, sumamos uno al final -> Hola 1
// i = 2, true, sumamos uno al final -> Hola 2
// i = 3, true, sumamos uno al final -> Hola 3
// i = 4, false

const movies = [
  "John Wick",
  "Nosferatu",
  "The Evil Dead",
  "The Matrix",
  "Dracula",
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump",
  "Inception",
  "The Matrix",
  "Fight Club",
  "Interstellar",
  "Gladiator",
];

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

//
console.log("//");

const numbers = [5, 45, 67, 2, 78, 90, 45, 3, 2, 23, 87];

let counter = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  counter += number;
}

console.log(counter);

console.log("//");

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//FOROF
for (const number of numbers) {
  console.log(number);
}
//FOREACH
numbers.forEach((number, i) => {
  console.log(number);
});

const batman = {
  name: "Bruce",
  lastName: "Wayne",
  city: "Gotham",
};

for (const propiedad in batman) {
  console.log(batman[propiedad]);
}

while (true) {
    console.log("Hola")
}