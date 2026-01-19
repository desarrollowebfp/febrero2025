const http = require("http");

const PORT = 3000;

//Creamos un servidor sencillo
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end(`
            <h1>Ruta inicial</h1>
            <p>Esto es mi servidor en la ruta "/"</p>
        `);
    return;
  }

  if (req.url === "/saludo") {
    res.statusCode = 200;
    res.end(`
            <h1>Ruta saludo</h1>
            <img src="https://http.cat/images/200.jpg" alt="Saludo"/>
        `);
    return;
  }

  res.statusCode = 404;
  res.end(`
    <img src="https://http.cat/images/404.jpg" alt="Not Found"/>
    `);
});

//Levantamos el servidor en el puerto
server.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
