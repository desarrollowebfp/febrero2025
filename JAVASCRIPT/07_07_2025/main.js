//Datos de Pokemon
const pokemons = [
  {
    name: "bulbasaur",
    number: 1,
    type: "grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
  },
  {
    name: "ivysaur",
    number: 2,
    type: "grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
  },
  {
    name: "venusaur",
    number: 3,
    type: "grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
  },
  {
    name: "charmander",
    number: 4,
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
  },
  {
    name: "charmeleon",
    number: 5,
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
  },
  {
    name: "charizard",
    number: 6,
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
  },
  {
    name: "squirtle",
    number: 7,
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
  },
  {
    name: "wartortle",
    number: 8,
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
  },
  {
    name: "blastoise",
    number: 9,
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
  },
  {
    name: "caterpie",
    number: 10,
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
  },
  {
    name: "metapod",
    number: 11,
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
  },
  {
    name: "butterfree",
    number: 12,
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
  },
  {
    name: "weedle",
    number: 13,
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
  },
  {
    name: "kakuna",
    number: 14,
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
  },
  {
    name: "beedrill",
    number: 15,
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
  },
  {
    name: "pidgey",
    number: 16,
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
  },
  {
    name: "pidgeotto",
    number: 17,
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
  },
  {
    name: "pidgeot",
    number: 18,
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
  },
  {
    name: "rattata",
    number: 19,
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
  },
  {
    name: "raticate",
    number: 20,
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
  },
  {
    name: "spearow",
    number: 21,
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
  },
  {
    name: "fearow",
    number: 22,
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
  },
  {
    name: "ekans",
    number: 23,
    type: "poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
  },
  {
    name: "arbok",
    number: 24,
    type: "poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png",
  },
  {
    name: "pikachu",
    number: 25,
    type: "electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    image_back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
  },
];

//Recupero el contenedor donde voy a pintar los pokemon
const container = document.querySelector("main>ul");
//Por cada uno de los Pokemon voy a crear un li dentro del ul
for (const pokemon of pokemons) {
  //Creamos un li vacio
  const li = document.createElement("li");
  //Añadimos una clase a cada uno de los li
  li.classList.add(pokemon.type);
  //Vamos a modificar el innerHTML de los li para crear los elementos de una forma un poco más agil
  li.innerHTML = `
    <div>
    <img src="${pokemon.image}" alt="${pokemon.name}"/>
    <img class="back" src="${pokemon.image_back}" alt="${pokemon.name} backwards" />
    </div>
    <h2>#${pokemon.number} - ${pokemon.name}</h2>
    `;
  //Añadimos cada uno de los li al container
  container.appendChild(li);
}
