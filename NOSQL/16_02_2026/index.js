const express = require("express");
const connectDB = require("./src/config/db");
const videogamesRouter = require("./src/routes/videogames.routes");

//Definimos el puerto
const PORT = 8080;

//Conectamos con la base de datos
connectDB();

//Creamos el servidor
const server = express();
//Tenemos que indicarle que vamos a trabajar con JSON
server.use(express.json());

//Definimos las rutas que tenemos
server.use("/api/videogames", videogamesRouter);

//Definimos el controlador de rutas no encontradas
server.use((req, res) => {
  return res.status(404).json({ message: "Route not found" });
});

//Definimos una ruta especial para errores básicos
server.use((err, req, res) => {
  console.log(err);
  return res.status(500).json({ message: "Internal Server Error" });
});

//Levantamos y escuchamos el servidor
server.listen(PORT, () => {
  console.log(`🛜  Servidor levantado en http://localhost:${PORT}`);
});
