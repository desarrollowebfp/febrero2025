const mongoose = require("mongoose");

const Album = require("../models/album.model");

// Esto son datos en un array de objetos "corriente"
const discos = [
  // Heavy Metal
  {
    title: "Iron Maiden",
    artist: "Iron Maiden",
    year: 1980,
    genre: "Heavy Metal",
  },
  {
    title: "British Steel",
    artist: "Judas Priest",
    year: 1980,
    genre: "Heavy Metal",
  },
  {
    title: "Blizzard of Ozz",
    artist: "Ozzy Osbourne",
    year: 1980,
    genre: "Heavy Metal",
  },
  { title: "Holy Diver", artist: "Dio", year: 1983, genre: "Heavy Metal" },
  {
    title: "Powerslave",
    artist: "Iron Maiden",
    year: 1984,
    genre: "Heavy Metal",
  },
  {
    title: "Painkiller",
    artist: "Judas Priest",
    year: 1990,
    genre: "Heavy Metal",
  },
  {
    title: "The Number of the Beast",
    artist: "Iron Maiden",
    year: 1982,
    genre: "Heavy Metal",
  },
  {
    title: "Ace of Spades",
    artist: "Motörhead",
    year: 1980,
    genre: "Heavy Metal",
  },
  {
    title: "Screaming for Vengeance",
    artist: "Judas Priest",
    year: 1982,
    genre: "Heavy Metal",
  },
  {
    title: "Paranoid",
    artist: "Black Sabbath",
    year: 1970,
    genre: "Heavy Metal",
  },

  // Black Metal
  {
    title: "A Blaze in the Northern Sky",
    artist: "Darkthrone",
    year: 1992,
    genre: "Black Metal",
  },
  {
    title: "Under a Funeral Moon",
    artist: "Darkthrone",
    year: 1993,
    genre: "Black Metal",
  },
  {
    title: "Transilvanian Hunger",
    artist: "Darkthrone",
    year: 1994,
    genre: "Black Metal",
  },
  {
    title: "De Mysteriis Dom Sathanas",
    artist: "Mayhem",
    year: 1994,
    genre: "Black Metal",
  },
  {
    title: "In the Nightside Eclipse",
    artist: "Emperor",
    year: 1994,
    genre: "Black Metal",
  },
  {
    title: "Hvis Lyset Tar Oss",
    artist: "Burzum",
    year: 1994,
    genre: "Black Metal",
  },
  {
    title: "Storm of the Light's Bane",
    artist: "Dissection",
    year: 1995,
    genre: "Black Metal",
  },
  { title: "Filosofem", artist: "Burzum", year: 1996, genre: "Black Metal" },
  {
    title: "Pure Holocaust",
    artist: "Immortal",
    year: 1993,
    genre: "Black Metal",
  },
  {
    title: "The Somberlain",
    artist: "Dissection",
    year: 1993,
    genre: "Black Metal",
  },

  // Thrash Metal
  {
    title: "Reign in Blood",
    artist: "Slayer",
    year: 1986,
    genre: "Thrash Metal",
  },
  {
    title: "Master of Puppets",
    artist: "Metallica",
    year: 1986,
    genre: "Thrash Metal",
  },
  {
    title: "Rust in Peace",
    artist: "Megadeth",
    year: 1990,
    genre: "Thrash Metal",
  },
  {
    title: "Peace Sells... but Who's Buying?",
    artist: "Megadeth",
    year: 1986,
    genre: "Thrash Metal",
  },
  {
    title: "Bonded by Blood",
    artist: "Exodus",
    year: 1985,
    genre: "Thrash Metal",
  },
  {
    title: "Among the Living",
    artist: "Anthrax",
    year: 1987,
    genre: "Thrash Metal",
  },
  {
    title: "Pleasure to Kill",
    artist: "Kreator",
    year: 1986,
    genre: "Thrash Metal",
  },
  { title: "Arise", artist: "Sepultura", year: 1991, genre: "Thrash Metal" },
  {
    title: "Fabulous Disaster",
    artist: "Exodus",
    year: 1989,
    genre: "Thrash Metal",
  },
  {
    title: "The New Order",
    artist: "Testament",
    year: 1988,
    genre: "Thrash Metal",
  },

  // Cumbia
  { title: "Selena", artist: "Selena", year: 1989, genre: "Cumbia" },
  { title: "Ven Conmigo", artist: "Selena", year: 1990, genre: "Cumbia" },
  { title: "Entre a Mi Mundo", artist: "Selena", year: 1992, genre: "Cumbia" },
  { title: "Amor Prohibido", artist: "Selena", year: 1994, genre: "Cumbia" },
  {
    title: "Amor, Familia y Respeto",
    artist: "A.B. Quintanilla y Los Kumbia Kings",
    year: 1999,
    genre: "Cumbia",
  },
  {
    title: "Shhh!",
    artist: "A.B. Quintanilla y Los Kumbia Kings",
    year: 2001,
    genre: "Cumbia",
  },
  {
    title: "4",
    artist: "A.B. Quintanilla y Los Kumbia Kings",
    year: 2003,
    genre: "Cumbia",
  },
  {
    title: "Fuego",
    artist: "A.B. Quintanilla y Los Kumbia Kings",
    year: 2004,
    genre: "Cumbia",
  },
  {
    title: "Planeta Kumbia",
    artist: "A.B. Quintanilla y Los Kumbia All Starz",
    year: 2008,
    genre: "Cumbia",
  },
  {
    title: "Elektro Kumbia",
    artist: "A.B. Quintanilla y Elektro Kumbia",
    year: 2017,
    genre: "Cumbia",
  },
];

// Vamos a convertir todos los discos en instancias de Album (modelo de mongo)
const discosToAlbum = discos.map((disco) => new Album(disco));

// Vamos a conectarnos temporalmente a nuestro servidor local de la base de datos
mongoose
  .connect("mongodb://localhost:27017/musicdb")
  .then(async () => {
    // Utilizando el método find de mongo, vamos a comprobar si tenemos un array de discos en nuestra base de datos
    const allAlbums = await Album.find();

    // Comprobamos si en nuestra de base de datos ya existen estos album
    if (allAlbums.length) {
      // Si encuentra albums en la base de datos los borramos todos, si no hay albums no hace nada
      await Album.collection.drop();
    }
  })
  .catch((error) => console.error("Error borrando los albums", error))
  .then(async () => {
    //Insertamos todos los albums en la colleccion correspondiente al modelo Album
    await Album.insertMany(discosToAlbum);
  })
  .catch((error) => console.error("Error insertando los albums", error))
  // Por seguridad, al terminar todo, haya o no errores, nos desconectamos de la base de datos
  .finally(() => mongoose.disconnect());
