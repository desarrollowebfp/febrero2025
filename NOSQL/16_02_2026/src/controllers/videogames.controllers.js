const Videogame = require("../models/videogame.model");

// Obtener todos los videojuegos
const getAllVideogames = async (req, res) => {
  try {
    const videogames = await Videogame.find();
    return res.status(200).json(videogames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Obtener un videojuego por su ID
const getVideogameByID = async (req, res) => {
  const { id } = req.params;
  try {
    const videogame = await Videogame.findById(id);
    if (!videogame) {
      return res
        .status(404)
        .json("No se encuentra el videojuego con el id especificado");
    }

    return res.status(200).json(videogame);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getAllVideogames, getVideogameByID };
