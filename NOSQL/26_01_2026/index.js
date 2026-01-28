const express = require("express");

//Creamos el servidor Express
const server = express();

//Creamos un router
const miPrimerRouter = express.Router();
//Definimos las rutas de mi primer router
miPrimerRouter.get("/", responderRutaPrincipañ);

miPrimerRouter.get("/status", responderStatus);

const lanzarDado =  (req, res) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  res.send({
    resultado: roll
  });
}

miPrimerRouter.get("/dice", lanzarDado);

//Conectamos el router y le damos un endpoint "padre"
server.use("/", miPrimerRouter)

//Definimos el puerto y lo escuchamos
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
