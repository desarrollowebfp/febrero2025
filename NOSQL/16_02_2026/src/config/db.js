const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/videogames";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Conectado con la base de datos");
  } catch (error) {
    console.log("❌ Error conectado con la base de datos", error.message);
  }
};

module.exports = connectDB;
