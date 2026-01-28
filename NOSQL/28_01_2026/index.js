const express = require("express");

const server = express();

//PARAMS
server.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const products = [
    {
      id: 1,
      name: "Movil",
    },
    {
      id: 2,
      name: "Botella de agua",
    },
    {
      id: 3,
      name: "Teclado",
    },
  ];

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.send("Producto no encontrado");
  }

  res.send(`El producto es ${product.name}`);
});

server.get("/search", (req, res) => {
    const category = req.query.category;
    const title = req.query.title;

    res.send(`Buscando libro por titulo: ${title} y categoria: ${category}`)
})


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
