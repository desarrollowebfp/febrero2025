const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    artist: { type: String, required: true },
    year: { type: Number, required: false },
    genre: {
      type: String,
      enum: ["Heavy Metal", "Black Metal", "Thrash Metal", "Cumbia"],
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
