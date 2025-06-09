const x = "Hola";

/* if (x === 10) {
  console.log("Es diez");
} else {
  console.log("No es diez");
} */

/* const edad = 25;

if (edad <= 17) {
  console.log("No puedes entrar");
} else if (edad >= 18 && edad <= 60) {
  console.log("Puedes pasar al concierto");
} else if (edad >= 61 && edad <= 120) {
  console.log("Puedes pasar al concierto, pero con cuidado");
} else {
  console.log("No puedes entrar");
} */

const edad = 5;
const tengoCarnet = true;
const tengoCoche = true;

if (edad >= 18 && tengoCarnet && tengoCoche) {
  console.log("Puedes conducir");
} else if (edad >= 18 && tengoCarnet && !tengoCoche) {
  console.log("Puedes conducir, pero no se con qué");
} else if (edad >= 18 && !tengoCarnet && tengoCoche) {
  console.log("Te tienes que sacar el carnet");
} else {
  console.log("NO PUEDES CONDUCIR");
}

//TERNARIO
edad >= 18
  ? console.log("Eres mayor de edad")
  : console.log("Eres menor de edad");

//SWITCH
const nota = 5;

switch (nota) {
  case 5:
    console.log("Suficiente");
    break;
  case 6:
    console.log("Suficiente");
    break;
  case 7:
    console.log("Notable");
    break;
  case 8:
    console.log("Notable");
    break;
  case 9:
    console.log("Sobresaliente");
    break;
  case 10:
    console.log("Sobresaliente");
    break;
  default:
    console.log("Estas suspenso");
    break;
}
