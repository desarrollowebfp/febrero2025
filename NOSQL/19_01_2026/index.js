const http = require("http");

const PORT = 3000;

//Creamos un servidor sencillo
const server = http.createServer((req, res) => {
  // 1º Vamos a darle un status a la petición
  res.statusCode = 200;
  // 2º Cabecera -> metadatos de la respuesta
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  // 3º Body -> el contenido que verá el cliente
  res.end("Hola, ¿qué tal?");
});

//Levantamos el servidor en el puerto
server.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
