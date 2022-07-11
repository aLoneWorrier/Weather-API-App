getWeatherData = async (city) => {
  
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e774271befmshe920fd72224d573p11140ajsn26e7c9aa6234',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

const weatherData = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
	.then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err))
  
  showWeatherData(weatherData)
}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
}

const showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}

