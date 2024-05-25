// document.addEventListener('DOMContentLoaded', () => {

//     // const currentCity = "paris";
//     // const currentCityData = weatherData[currentCity + "_daily"]
//     // const currentCityDataHourly = weatherData[currentCity + "_hourly"]
//     // const d = new Date();
//     // const hour = d.getHours() + ':' + d.getMinutes();
//     // const cityFocusOneTitle = document.querySelector('#cityfocus-1-heading');
//     // const apparent_temperature_max = document.getElementById("apparent_temperature_max");
//     // const wind_gusts_10m_max = document.getElementById("wind_gusts_10m_max");
//     // const temperature_2m_max = document.getElementById("temperature_2m_max");
//     // const temperature_2m_min = document.getElementById("temperature_2m_min");
//     // const wind_speed_10m_max = document.getElementById("wind_speed_10m_max");
//     // const apparent_temperature_min = document.getElementById("apparent_temperature_min");
//     // const time = document.getElementById("time");
//     // const weatherCode = document.getElementById("weatherCode");

//     const urlParams = new URLSearchParams(window.location.search);

//     const cityName = urlParams.get('name');



//     const myWeatherData = weatherData.list().find(item => item.name === cityName);

//     document.getElementById('cityfocus-1-heading').textContent = cityName.name; // myWeatherData.name;



//     const main = document.querySelector('main');

//     main.innerHTML = main.innerHTML + assignment1.components.createDailyForecastsWidgets(weatherData);



// });