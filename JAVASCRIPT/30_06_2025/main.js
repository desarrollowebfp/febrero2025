//NODOS -> Recuperar un elemento existente del documento
const title = document.querySelector("#title");
title.textContent = "Ahora este es otro título";
title.id = "titulito";

//NODOS -> Recuperar varios elementos existentes
const parrafos = document.querySelectorAll(".parrafo");

parrafos[1].remove();

//NODO -> Crear un nuevo nodo
const h2 = document.createElement("h2");
h2.id = "subtitulo";
h2.textContent = "Esto es un subtitulo";

document.body.appendChild(h2);

//Alterar el orden de inyección dinámica
const mejoresVideojuegos = [
  "The Legend of Zelda: Ocarina of Time",
  "Super Mario Bros. 3",
  "The Witcher 3: Wild Hunt",
  "Red Dead Redemption 2",
  "Tetris",
  "Minecraft",
  "The Elder Scrolls V: Skyrim",
  "Half-Life 2",
  "The Last of Us",
  "Dark Souls",
  "Super Mario 64",
  "Metal Gear Solid",
  "Portal 2",
  "Grand Theft Auto V",
  "Chrono Trigger",
  "Mass Effect 2",
  "God of War (2018)",
  "BioShock",
  "Final Fantasy VII",
  "Resident Evil 4",
  "Bloodborne",
  "Super Metroid",
  "Shadow of the Colossus",
  "Halo: Combat Evolved",
  "Uncharted 2: Among Thieves",
  "Celeste",
  "Hades",
  "Undertale",
  "Persona 5",
  "Doom (1993)",
  "Street Fighter II",
  "Super Smash Bros. Melee",
  "The Legend of Zelda: Breath of the Wild",
  "Animal Crossing: New Horizons",
  "Baldur's Gate 3",
  "Sekiro: Shadows Die Twice",
  "Fortnite",
  "League of Legends",
  "Counter-Strike",
  "World of Warcraft"
];


const ul = document.querySelector("#lista");

mejoresVideojuegos.sort();
mejoresVideojuegos.reverse();

for (const videojuego of mejoresVideojuegos) {
    const li = document.createElement("li");
    li.textContent = videojuego;
    ul.appendChild(li);
}