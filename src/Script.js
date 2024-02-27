const apiKey = '4eb3703790b356562054106543b748b2';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const weatherImage = document.getElementById('img')
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

// searchButton.addEventListener('click', () => {
//     const location = locationInput.value;
//     if (location) {
//         fetchWeather(location);
//     }
// });

function fetchWeather() {
    const location = locationInput.value;
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
            locationElement.textContent = data.name;
            // temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            temperatureElement.textContent = data.main.temp+" °C";
            descriptionElement.textContent = data.weather[0].main;
            if(data.weather[0].main=="Clouds") {
                weatherImage.innerHTML= `
                <img src="images/clouds.png" alt="Clouds">
                `
            } else if(data.weather[0].main=="Clear") {
                weatherImage.innerHTML= `
                <img src="images/clear.png" alt="Clear">
                `
            } else if(data.weather[0].main=="Rain") {
                weatherImage.innerHTML= `
                <img src="images/rain.png" alt="Rain">
                `
            } else if(data.weather[0].main=="Drizzle") {
                weatherImage.innerHTML= `
                <img src="images/drizzle.png" alt="Drizzle">
                `
            } else if(data.weather[0].main=="Mist") {
                weatherImage.innerHTML= `
                <img src="images/mist.png" alt="Mist">
                `
            } else if(data.weather[0].main=="Haze") {
                weatherImage.innerHTML= `
                <img src="images/clouds.png" alt="Haze">
                `
            }
        }).catch(error => {
            console.error('Error fetching weather data:', error);
        });
}