import "./style.css";

const API_KEY = import.meta.env.VITE_API_KEY;

const getWeather = async (city) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );
  const data = await res.json();
  renderWeather(data);
};

const renderWeather = (data) => {
  document.querySelector("#result").innerHTML = `
    <h1>${data.location.name}, ${data.location.country}</h1>
    <h2>${data.current.temp_c}º</h2>
    <h3>Feels like: ${data.current.feelslike_c}</h3>
    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}"/>
    <p>${data.current.condition.text}</p>
    <p>Humidity: ${data.current.humidity}%</p>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  //Inyección principal de HTML
  document.querySelector("#app").innerHTML = `
    <div>
      <input type="text" id="city" placeholder="Madrid, Spain..."/>
      <button id="searchBtn">Search</button>
      <div id="result"></div>
    </div>
`;
  //Llamamos a la API y pintamos los datos en su arranque
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      getWeather(`${pos.coords.latitude},${pos.coords.longitude}`);
    });
  }

  //Le añadimos un listener al botón para que recoja los datos del input
  document.querySelector("#searchBtn").addEventListener("click", () => {
    const inputValue = document.querySelector("#city").value;
    getWeather(inputValue);
    document.querySelector("#city").value = ""
  });
});

//Añadimos otro evento para lanzarlo pulsando Enter
document.addEventListener("keypress", (ev) => {
  if (ev.key === "Enter") {
    const inputValue = document.querySelector("#city").value;
    getWeather(inputValue);
    document.querySelector("#city").value = ""
  }
});
