function refreshWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "0c82f342fda93oafb0380423bfe8tdd0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=0c82f342fda93oafb0380423bfe8tdd0&units=metric`;
  axios.get(apiUrl).then(refreshWeatherData);
}

function processSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", processSearch);

searchCity("Roma");
