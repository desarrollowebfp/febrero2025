const colores = ["rojo", "amarillo", "verde", "azul"];

//ACCEDE
//POSICIONES -> INDICES -> INDEX
console.log(colores[0]);
//LONGITUD
console.log(colores.length); //GO TO HELL
//SOBREESCRIBIR VALORES LLAMANDO A SUS POSICIONES
colores[0] = "negro";
console.log(colores);

//METODOS QUE MODIFICAN EL ARRAY ORIGINAL
colores.push("blanco", "rojo");
console.log(colores);
colores.pop();
console.log(colores);
colores.unshift("morado");
console.log(colores);
colores.shift();
console.log(colores);
colores.sort();
console.log(colores);
colores.reverse();
console.log(colores);

colores.splice(1, 3, "rosa");
console.log(colores);

//MÉTODOS DE CONSULTA
console.log(colores.indexOf("rojo"));
console.log(colores.includes("amarillo"));

//Modifico para que haya más
colores.push("rojo", "azul", "negro");
console.log(colores);

console.log(colores.slice(2, 4));

const nuevoArray = colores.slice(2, 4);
console.log(nuevoArray);

//Concat
const juegosRetro = ["Mario Bros", "Tetris", "Arkanoid"];
const juegosNuevos = ["Elden Ring", "Death Stranding", "GTA VI"];
const juegos = juegosRetro.concat(juegosNuevos);
console.log(juegos);

//Ejemplo -> Quitar Elden Ring
const eldenRingPos = juegos.indexOf("Elden Ring");
juegos.splice(eldenRingPos, 1);
console.log(juegos);

console.log(juegos.slice(2));

const arrayPsicopata = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(arrayPsicopata.flat(4));
