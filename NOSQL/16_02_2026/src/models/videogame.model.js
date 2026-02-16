const mongoose = require("mongoose");

const videogameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    platform: { type: String, required: false },
    devTeam: { type: String, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Videogame = mongoose.model("Videogame", videogameSchema);

module.exports = Videogame;
