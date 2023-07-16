const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", function() {
  const location = searchInput.value;
  getWeatherData(location);
});

function getWeatherData(location) {
  // Replace 'YOUR_API_KEY' with your actual API key
  const apiKey = '1be785bd733c5bf08d2b6e6ff9c4bc12';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeatherData(data);
    })
    .catch(error => {
      console.log("Error fetching weather data:", error);
    });
}

function displayWeatherData(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;

  const weatherHTML = `
    <h2>${cityName}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Weather: ${weatherDescription}</p>
  `;

  weatherInfo.innerHTML = weatherHTML;
}

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded');
});

//1be785bd733c5bf08d2b6e6ff9c4bc12