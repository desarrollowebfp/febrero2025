//DESTRUCTURING
const array = ["primero", "segundo", "tercero"];

//NORMAL
/* const primero = array[0];
const segundo = array[1];
const tercero = array[2]; */

const [primero, segundo, tercero] = array;

const batman = {
  name: "Bruce Wayne",
  city: "Gotham",
  age: 56,
};

//NORMAL
/* const name = batman.name;
const city = batman.city;
const age = batman.age;
 */

const { name, city, age } = batman;

//SPREAD OPERATOR -> ...
const primerArray = [1, 2, 3];
const segundoArray = [4, 5, 6];

const nuevoArray = [...primerArray, ...segundoArray, 7, 8, 9];
const resultadoArray = [...nuevoArray, 10];
console.log(resultadoArray);

//Arrays con argumentos
const datos = ["Antonio", 1990, 2025];

const calculateAge = (name, bornYear, actualYear) => {
  console.log(`La edad de ${name}, es ${actualYear - bornYear}`);
};

calculateAge(...datos)

//Objetos
const copiaBatman = {...batman, age: 50};
console.log(copiaBatman)