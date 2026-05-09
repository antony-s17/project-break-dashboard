const getWeatherStation = async() => {
    try {
        const weatherCityContainer = document.getElementById("weather-city");
        const currentWeatherContainer = document.getElementById("current-weather");
        const hourWeatherContainer = document.getElementById("hour-weather");
        if (!weatherCityContainer || !currentWeatherContainer || !hourWeatherContainer) {
            throw new Error("City or current weather not found");
        }
        const apiKey = "8cf98ec1da984a40b23173434260905";
        const city = "Arequipa";
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`);
        const data = await response.json();
        const temperatureIcon = data.current.temp_c > 38 ? "https://res.cloudinary.com/ddzxpi7rk/image/upload/v1778349771/temperature-high_zctvkq.png" : "https://res.cloudinary.com/ddzxpi7rk/image/upload/v1778350043/temperature-down_otigrd.png";
        weatherCityContainer.innerHTML = `<h2 class="weather-city">${data.location.name} / ${data.location.country}</h2>`;
        currentWeatherContainer.innerHTML = `
            <div class="weather-current-main">
                <h2 class="weather-main">${data.current.condition.text}</h2>
                <div class="weather-images">
                    <img class="weather-main-icon" src="${data.current.condition.icon}" alt="${data.current.condition.text}">
                    <img class="weather-main-icon" src="${temperatureIcon}" alt="${data.current.temp_c}°">
                </div>
                <div class="weather-details">
                    <p>Precipitation: ${data.current.precip_mm}%</p>
                    <p>Humidity: ${data.current.humidity}%</p>
                    <p>Wind Speed: ${data.current.wind_kph} km/h</p>
                </div>
            </div>
        `;
        //recover forecast data
        const hourWeather = data.forecast.forecastday[0].hour;
        hourWeather.forEach(hour => {
            hourWeatherContainer.innerHTML += `
                <div class="weather-item">
                    <p class="weather-time">${hour.condition.text} - ${hour.time}</p>
                    <img class="weather-hour-icon" src="${hour.condition.icon}" alt="${hour.condition.text}">
                    <p class="weather-temp">${hour.temp_c}°C</p>
                </div>
            `;
        })

    } catch(error) {
        alert("Error to get the weather station data");
    }
}

getWeatherStation();