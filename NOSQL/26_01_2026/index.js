const express = require("express");

//Creamos el servidor Express
const server = express();

//Creamos un router
const miPrimerRouter = express.Router();
//Definimos las rutas de mi primer router
miPrimerRouter.get("/", (req, res) => {
  res.send("Esta es mi ruta principal");
});

miPrimerRouter.get("/status", (req, res) => {
  res.send({
    ok: true,
    message: "Esta ruta está funcionando",
    timestamp: new Date().toISOString(),
  });
});

miPrimerRouter.get("/dice", (req, res) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  res.send({
    resultado: roll
  });
});

//Conectamos el router y le damos un endpoint "padre"
server.use("/", miPrimerRouter)

//Definimos el puerto y lo escuchamos
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
