const express = require("express");

const { getAllVideogames, getVideogameByID } = require("../controllers/videogames.controllers");

const router = express.Router();

// Especificamos las rutas que disparan los controladores
router.get("/", getAllVideogames);
router.get("/:id", getVideogameByID);

module.exports = router