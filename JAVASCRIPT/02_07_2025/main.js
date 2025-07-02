//Voy a pintar dinamicamente el footer para que salga siempre el año actual al lado del Copyright
const footer = document.querySelector("footer");
const year = new Date().getFullYear() || 2024;
footer.textContent = `Copyright ${year} - My videogames`;

//Tenemos un array de objetos
const videogames = [
  {
    title: "The Legend of Zelda: Ocarina of Time",
    release_year: 1998,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
    platform: "Nintendo 64",
    developer: "Nintendo EAD",
    genre: "Action-adventure",
  },
  {
    title: "Grand Theft Auto V",
    release_year: 2013,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    platform: "PlayStation 3, Xbox 360, PlayStation 4, Xbox One, PC",
    developer: "Rockstar North",
    genre: "Action-adventure",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    release_year: 2015,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    platform: "PlayStation 4, Xbox One, PC, Nintendo Switch",
    developer: "CD Projekt Red",
    genre: "Action role-playing",
  },
  {
    title: "Half-Life 2",
    release_year: 2004,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/2/25/Half-Life_2_cover.jpg",
    platform: "PC, Xbox, Xbox 360, PlayStation 3",
    developer: "Valve",
    genre: "First-person shooter",
  },
  {
    title: "Red Dead Redemption 2",
    release_year: 2018,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    platform: "PlayStation 4, Xbox One, PC, Stadia",
    developer: "Rockstar Studios",
    genre: "Action-adventure",
  },
  {
    title: "Super Mario 64",
    release_year: 1996,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg",
    platform: "Nintendo 64",
    developer: "Nintendo EAD",
    genre: "Platform",
  },
  {
    title: "Doom",
    release_year: 1993,
    cover: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
    platform: "MS-DOS, Multiple platforms",
    developer: "id Software",
    genre: "First-person shooter",
  },
  {
    title: "Portal 2",
    release_year: 2011,
    cover: "https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2cover.jpg",
    platform: "PC, PlayStation 3, Xbox 360",
    developer: "Valve",
    genre: "Puzzle-platform",
  },
  {
    title: "Dark Souls",
    release_year: 2011,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
    platform: "PlayStation 3, Xbox 360, PC",
    developer: "FromSoftware",
    genre: "Action role-playing",
  },
  {
    title: "Mass Effect 2",
    release_year: 2010,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/0/05/MassEffect2_cover.PNG",
    platform: "PC, PlayStation 3, Xbox 360",
    developer: "BioWare",
    genre: "Action role-playing",
  },
  {
    title: "God of War (2018)",
    release_year: 2018,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    platform: "PlayStation 4",
    developer: "Santa Monica Studio",
    genre: "Action-adventure",
  },
];

//Vamos a pintar todas las cartas de videojuegos
const vg_container = document.querySelector("#vg-container");
//Recorro todos los videojuegos
for (const videogame of videogames) {
    //Creamos un li por cada uno de los videojuegos
    const li = document.createElement("li");
    //Modificamos el contenido de cada li
    li.innerHTML = 
    `
    <img src="${videogame.cover}" alt="${videogame.title} cover"/>
    <h2>${videogame.title}</h2>
    <h3>${videogame.platform}</h3>
    <p>${videogame.developer} - ${videogame.release_year}</p>
    <p>${videogame.genre}</p>
    `
    //Inyectamos cada uno de los li's en el contenedor
    vg_container.appendChild(li);
}