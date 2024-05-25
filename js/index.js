

document.addEventListener('DOMContentLoaded', () => {


    const main = document.querySelector('main');
    weatherData.forEach((weatherData) =>{
         main.innerHTML += weatherData.components.createDailyForecastWidget(weatherData);
        });
});