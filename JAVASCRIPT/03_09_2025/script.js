fetch("https://rickandmortyapi.com/api/character")
  .then((result) => result.json())
  .then((result) => {
    for (const character of result.results) {
        document.querySelector("#container").innerHTML += `<img src="${character.image}" alt=""/>`
    }
    console.log("Terminado!")
  });
