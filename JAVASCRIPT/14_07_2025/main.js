//Creamos los datos
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

//Añadimos la funcionalidad al boton del tema
document.querySelector("#themeBtn").addEventListener("click", (ev) => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    ev.target.textContent = "🌑";
  } else {
    ev.target.textContent = "☀️";
  }
});

//Creamos una función que pinta los datos
const renderVideogames = (videogamelist) => {
  const container = document.querySelector("#container");
  //Vaciamos el contenedor para que no se repita con cada una de las busquedas
  container.innerHTML = "";
  //Controlamos el caso en el que no haya coincidencias
  if (!videogamelist.length) {
    container.innerHTML = "<h2>No hay coincidencias</h2>";
  } else {
    for (const videogame of videogamelist) {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${videogame.cover}" alt="${videogame.title} cover"/>
        <h2>${videogame.title}</h2>
        <p>${videogame.platform}</p>
        `;
      container.appendChild(li);
    }
  }
};

//Le añadimos el evento a videogameInput
document.querySelector("#videogameInput").addEventListener("input", (ev) => {
  let filteredVideogames = [];
  for (const videogame of videogames) {
    if (videogame.title.toLowerCase().includes(ev.target.value.toLowerCase())) {
      filteredVideogames.push(videogame);
    }
  }
  renderVideogames(filteredVideogames);
});

//Añadimos un evento DOMContentLoaded a la ventana para ejecutar lo que queramos una vez el contenido esté cargado al completo en el navegador
window.addEventListener("DOMContentLoaded", () => {
  renderVideogames(videogames);
});
