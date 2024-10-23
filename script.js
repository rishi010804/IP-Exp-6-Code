const API_KEY = 'f4f2c81f8172cafd315c4f2527b35568';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city)
            .then(data => displayWeather(data))
            .catch(error => console.error('Error fetching weather data:', error));
    } else {
        alert('Please enter a city name');
    }
});

function fetchWeather(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        });
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const { name, main, weather } = data;
    weatherDiv.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

