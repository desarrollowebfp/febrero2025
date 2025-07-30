//MAP
const numeros = [1, 2, 3, 4, 5, 6];

//NORMAL
/* const porDos = [];

for (const numero of numeros) {
  porDos.push(numero * 2);
}

console.log(porDos); */

//CON MAP
const porDos = numeros.map((num) => num * 2);
console.log(porDos);

//

const habitantes = ["🧒", "🧒", "🧒", "🧒", "🐕", "🧒", "🧒"];

const infeccion = habitantes.map((habitante) =>
  habitante === "🧒" ? "🧟" : habitante
);

console.log(infeccion);

//

const pokemons = [
  {
    name: "Pikachu",
    id: 25,
    sprites: {
      front: "http://pikachu.png",
      front_default: "http://pikachu.png",
      world_dream: {
        front: "http://pikachuBUENO.png",
      },
    },
    dni: 62459832946,
    height: 87,
  },
  {
    name: "Bulbasaur",
    id: 1,
    sprites: {
      front: "http://pikachu.png",
      front_default: "http://pikachu.png",
      world_dream: {
        front: "http://pikachuBUENO.png",
      },
    },
    dni: 62459832946,
    height: 87,
  },
  {
    name: "Charmander",
    id: 6,
    sprites: {
      front: "http://pikachu.png",
      front_default: "http://pikachu.png",
      world_dream: {
        front: "http://pikachuBUENO.png",
      },
    },
    dni: 62459832946,
    height: 87,
  },
];

const nuevosPokemon = pokemons.map((pokemon) => ({
  name: pokemon.name,
  id: pokemon.id,
  image: pokemon.sprites.world_dream.front,
}));

console.log(nuevosPokemon);
