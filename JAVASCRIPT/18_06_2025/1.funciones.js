function saludar() {
  const texto = "Hola";
  console.log(texto);
}

saludar();
saludar();
saludar();

//

function saludarConNombre(nombre) {
  const texto = "Hola " + nombre;
  console.log(texto);
}

saludarConNombre("Antonio");
saludarConNombre("Estefania");
saludarConNombre("Jheremi");
saludarConNombre();

//

function sumarDosNumeros(numeroA, numeroB) {
  const total = numeroB + numeroA;
  console.log("El total de " + numeroA + " más " + numeroB + " es: " + total);
}

sumarDosNumeros(5, 6);

//

function calcularElDoble(numero) {
  const total = numero * 2;
  return total;
}

const totalDe6Por2 = 3 * calcularElDoble(4);
console.log(totalDe6Por2);

//

function guardiaDeSeguridad(edad) {
  if (typeof edad !== "number") {
    console.log("No es un número");
    return;
  }
}

guardiaDeSeguridad("Hola");

//

function calcularEdad(usuario) {
  const edad = (usuario.añoActual || 2025) - usuario.añoNacimiento;
  console.log(usuario.nombre + " tiene " + edad + " años");
}

const antonio = {
  añoNacimiento: 1990,
  nombre: "Antonio",
};

calcularEdad(antonio);

//ARROW FUNCTIONS

const saludadorConNombre = (nombre) => {
  return "Hola " + nombre;
};
