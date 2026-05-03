const getWeatherStation = async() => {
    try {
        const cityElement = document.getElementById("city");
        const currentWeather = document.getElementById("current-weather");
        if (!cityElement || !currentWeather) {
            throw new Error("City or current weather not found");
        }
        const apiKey = "26fd2f7ef9a0452cb9914702262604";
        const city = "Arequipa";
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`);
        const data = await response.json();
        cityElement.textContent = `${data.location.name} / ${data.location.country}`;
        currentWeather.innerHTML = `
            <p>${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
            <div>
                <p>Temperature: ${data.current.temp_c}°C - ${data.current.temp_f}°F</p>
                <p>Precipitation: ${data.current.precip_mm}%</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} km/h</p>
            </div>
        `;
        //recover forecast data
        const hourWeather = data.forecast.forecastday[0].hour;
        hourWeather.forEach(hour => {
            currentWeather.innerHTML += `
                <div>
                    <p>${hour.condition.text} - ${hour.time}</p>
                    <img src="${hour.condition.icon}" alt="${hour.condition.text}">
                    <p>${hour.temp_c}°C</p>
                </div>
            `;
        })

    } catch(error) {
        alert("Error to get the weather station data");
    }
}

getWeatherStation();