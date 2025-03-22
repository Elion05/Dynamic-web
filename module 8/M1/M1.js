"use strict";
// Selecteer de benodigde elementen uit de DOM
const getWeatherButton = document.getElementById('getWeather');
const loaderElement = document.getElementById('loader');
const weatherDataElement = document.getElementById('weather-data');
const cachedNoticeElement = document.getElementById('cached-notice');

// Je zou normaal gesproken een echte API key gebruiken
const apiKey = '058600f0298df0d6e6a61940b383e959';

// Functie om de loader te tonen of te verbergen
const toggleLoader = (show) => {
  loaderElement.style.display = show ? 'block' : 'none';
};

// Functie om het weer weer te geven
const displayWeather = (weatherData, fromCache = false) => {
  // Formatteer de datum naar een leesbaar formaat
  const date = new Date(weatherData.dt * 1000).toLocaleString();
  
  // Bouw de weer info op
  const weatherHtml = `
    <h2>${weatherData.name}</h2>
    <p><strong>Temperatuur:</strong> ${Math.round(weatherData.main.temp)}°C</p>
    <p><strong>Weersomstandigheden:</strong> ${weatherData.weather[0].description}</p>
    <p><strong>Luchtvochtigheid:</strong> ${weatherData.main.humidity}%</p>
    <p><strong>Windsnelheid:</strong> ${weatherData.wind.speed} m/s</p>
    <p><strong>Laatst bijgewerkt:</strong> ${date}</p>
  `;
  
  // Update de DOM
  weatherDataElement.innerHTML = weatherHtml;
  
  // Toon een bericht als we gecachte gegevens gebruiken
  cachedNoticeElement.textContent = fromCache 
    ? 'Gegevens zijn van cache. Nieuwe gegevens worden opgehaald...' 
    : '';
};

// Functie om het weer op te halen van de API
const fetchWeather = async (lat, lon) => {
  try {
    
    // Echte API call zou er zo uitzien:
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    
    if (!response.ok) {
      throw new Error(`API fout: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Fout bij het ophalen van weersgegevens:', error);
    throw error;
  }
};

// Functie om het weer op te halen met geolocation
const getWeather = async () => {
  toggleLoader(true);
  
  // Controleer eerst of er gegevens in localStorage zijn
  const cachedWeatherData = localStorage.getItem('weatherData');
  
  if (cachedWeatherData) {
    // Toon de gecachte gegevens terwijl we nieuwe ophalen
    displayWeather(JSON.parse(cachedWeatherData), true);
  }
  
  try {
    // Nieuwe Promise-gebaseerde wrapper rond de geolocation API
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    });
    
    const { latitude, longitude } = position.coords;
    
    // Haal de weersgegevens op
    const weatherData = await fetchWeather(latitude, longitude);
    
    // Sla de nieuwe gegevens op in localStorage
    localStorage.setItem('weatherData', JSON.stringify(weatherData));
    
    // Toon de nieuwe gegevens
    displayWeather(weatherData, false);
  } catch (error) {
    let errorMessage = "Er is een fout opgetreden bij het ophalen van het weer.";
    
    if (error.code === 1) {
      errorMessage = "Locatietoegang geweigerd. Sta locatietoegang toe om het weer voor jouw locatie te zien.";
    } else if (error.code === 2) {
      errorMessage = "Locatie niet beschikbaar. Probeer het later opnieuw.";
    } else if (error.code === 3) {
      errorMessage = "Time-out bij het ophalen van de locatie. Probeer het opnieuw.";
    }
    
    weatherDataElement.innerHTML = `<p class="error">${errorMessage}</p>`;
  } finally {
    toggleLoader(false);
  }
};

// Event listener voor de weer-knop
getWeatherButton.addEventListener('click', getWeather);

// Controleer bij het laden van de pagina of er gecachte gegevens zijn
document.addEventListener('DOMContentLoaded', () => {
  const cachedWeatherData = localStorage.getItem('weatherData');
  
  if (cachedWeatherData) {
    // Toon de gecachte gegevens
    displayWeather(JSON.parse(cachedWeatherData), true);
    
    // Haal automatisch nieuwe gegevens op als we gecachte gegevens hebben
    getWeather();
  }
});