/* Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const alumnos = [
  "Elias",
  "Carlos",
  "Heber",
  "Álvaro",
  "Julio",
  "Diego",
  "Alex",
  "Javi",
];

function findLongestWord(stringList) {
  let longestWord = "";

  for (const element of stringList) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }

  console.log(longestWord);
}

findLongestWord(avengers);
findLongestWord(alumnos);
