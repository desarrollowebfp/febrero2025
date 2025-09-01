//METODOS DE ARRAYS DE ES6 (mirar la anterior lección el map, que también es un método de array)

const superheroes = [
  { name: "Superman", age: 35, city: "Metropolis", realName: "Clark Kent" },
  { name: "Batman", age: 40, city: "Gotham", realName: "Bruce Wayne" },
  {
    name: "Wonder Woman",
    age: 3000,
    city: "Themyscira",
    realName: "Diana Prince",
  },
  { name: "Flash", age: 28, city: "Central City", realName: "Barry Allen" },
  { name: "Aquaman", age: 35, city: "Atlantis", realName: "Arthur Curry" },
  {
    name: "Green Lantern",
    age: 32,
    city: "Coast City",
    realName: "Hal Jordan",
  },
  { name: "Spider-Man", age: 25, city: "New York", realName: "Peter Parker" },
  { name: "Iron Man", age: 45, city: "Malibu", realName: "Tony Stark" },
  {
    name: "Captain America",
    age: 105,
    city: "Brooklyn",
    realName: "Steve Rogers",
  },
  { name: "Thor", age: 1500, city: "Asgard", realName: "Thor Odinson" },
  { name: "Hulk", age: 40, city: "Dayton", realName: "Bruce Banner" },
  {
    name: "Black Widow",
    age: 35,
    city: "Stalingrad",
    realName: "Natasha Romanoff",
  },
  {
    name: "Doctor Strange",
    age: 42,
    city: "New York",
    realName: "Stephen Strange",
  },
  { name: "Black Panther", age: 35, city: "Wakanda", realName: "T'Challa" },
  { name: "Wolverine", age: 137, city: "Alberta", realName: "Logan" },
];

//FILTER
const youngSuperheroes = superheroes.filter((superhero) => superhero.age < 40);

const superheroesWithB = superheroes.filter((superhero) =>
  superhero.name.toLowerCase().includes("b")
);

console.log(youngSuperheroes);
console.log(superheroesWithB);

// FIND
const batman = superheroes.find((superhero) => superhero.name === "Batman");
console.log(batman);

// EVERY
const todosjovenes = superheroes.every((superhero) => superhero.age < 40);
console.log(todosjovenes);

// SOME
const algunosjovenes = superheroes.some((superhero) => superhero.age < 40);
console.log(algunosjovenes);

// REDUCE
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const total = numeros.reduce((acc, numero) => {
  return acc + numero;
}, 0);
console.log(total);

// FILTER CON REDUCE
//const youngSuperheroes = superheroes.filter((superhero) => superhero.age < 40);

const youngSuperheroes2 = superheroes.reduce((acc, superhero) => {
    if(superhero.age < 40){
        acc.push(superhero)
    }
    return acc
}, []);

console.log(youngSuperheroes2);

