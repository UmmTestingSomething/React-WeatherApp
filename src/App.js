import './App.css';

const weatherImage = document.getElementById('img');

const getWeather = () => {
  const location = document.getElementById('locationInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4eb3703790b356562054106543b748b2&units=metric`

  fetch(url).then(response => response.json()).then(data => {
    document.getElementById('location').textContent = data.name;
    document.getElementById('temperature').textContent = data.main.temp+" °C"
    document.getElementById('description').textContent = data.weather[0].main
    if(data.weather[0].main=="Clouds") {
        weatherImage.innerHTML= 
        `
        <img src="../images/clouds.png" alt="Clouds.png">
        `
    } 
    else if(data.weather[0].main=="Clear") {
        weatherImage.innerHTML= 
        `
        <img src="../images/clear.png" alt="Clear.png">
        `
    } 
    else if(data.weather[0].main=="Rain") {
        weatherImage.innerHTML= 
        `
        <img src="../images/rain.png" alt="Rain.png">
        `
    } 
    else if(data.weather[0].main=="Drizzle") {
        weatherImage.innerHTML= 
        `
        <img src="../images/drizzle.png" alt="Drizzle.png">
        `
    } 
    else if(data.weather[0].main=="Mist") {
        weatherImage.innerHTML= 
        `
        <img src="../images/mist.png" alt="Mist.png">
        `
    } 
    else if(data.weather[0].main=="Haze") {
        weatherImage.innerHTML= 
        `
        <img src="../images/clouds.png" alt="Haze.png">
        `
    }
      }).catch(error => {
          console.error('Error fetching weather data:', error)
      })
}

function App() {
  return (
    <>
  <div className="container">
    <h1>Weather App</h1>
    <input className='text-box' type="text" id="locationInput" placeholder="Enter a city" />
    <button onClick={getWeather} id="searchButton">
      Search
    </button>
    <div className="weather-info">
      <h2 id="location" />
      <div id="img">

      </div>
      <p id="temperature" />
      <p id="description" />
    </div>
  </div>
</>

  );
}

export default App;
