
document.addEventListener('DOMContentLoaded', () => {

  const urlParams = new URLSearchParams(window.location.search);
  const currentCity = urlParams.get('city');
  console.log(currentCity);
  const cityHeading = document.getElementById("cityfocus-1-heading");
 
  function removeUnderscoreAndCapitalize(str) {
   return str.split('_')
     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
     .join('');
 }
 const input = currentCity;
 const output = removeUnderscoreAndCapitalize(input);
 
 // https://www.codeease.net/programming/javascript/javascript-remove-underscore-and-capitalize

 let addingSpaceBack = output;

 addingSpaceBack = addingSpaceBack.replace(/([A-Z])/g, ' $1');
 cityHeading.innerHTML = addingSpaceBack;

 // https://www.sourcetrail.com/javascript/js-add-space-before-capital-letter/
 
 /**
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
  * https://bobbyhadz.com/blog/javascript-add-1-day-to-date
  * https://www.w3schools.com/js/js_dates.asp
  */
  const currentCityData = weatherData[currentCity + "_daily"]
  const currentCityDataHourly = weatherData[currentCity + "_hourly"]
  const date = new Date();
  const simpleHour = date.getHours();
  const hour = date.getHours() + ':' + date.getMinutes();
  const day = date.getDay();

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayNumbers = ["0", "1", "2", "3", "4", "5", "6"];

  function addOneDay(date = new Date()) {
    const dateCopy = new Date(date);
  
    dateCopy.setDate(dateCopy.getDate() + 1);
  
    return dateCopy;
  }

  console.log(dayNumbers[day])

  const tomorrow = addOneDay(date);
  console.log(tomorrow);
  const todayPlusTwo = addOneDay(tomorrow);
  const todayPlusThree = addOneDay(todayPlusTwo);
  const todayPlusFour = addOneDay(todayPlusThree);
  const todayPlusFive = addOneDay(todayPlusFour);
  const todayPlusSix = addOneDay(todayPlusFive);
  const todayPlusSeven = addOneDay(todayPlusSix);

  console.log(todayPlusTwo);
  console.log(todayPlusSeven);
  console.log(dayNames[addOneDay(date)]);
  
  const indexOfToday = currentCityData.daily.time.indexOf(`Today`);  
  const indexOfTodayPlusOne = currentCityData.daily.time.indexOf(`Today+${dayNumbers[day+1]}`);  
  const indexOfTodayPlusTwo = currentCityData.daily.time.indexOf(`Today+${dayNumbers[day+2]}`); 
  const indexOfTodayPlusThree = currentCityData.daily.time.indexOf(`Today+${dayNumbers[day+3]}`);  
  const indexOfTodayPlusFour = currentCityData.daily.time.indexOf(`Today+${dayNumbers[day+4]}`);  
  const indexOfTodayPlusFive = currentCityData.daily.time.indexOf(`Today+${dayNumbers[day+5]}`); 
  const indexOfTodayPlusSix = currentCityData.daily.time.indexOf(`Today+${dayNumbers[day+6]}`); 

  const indexOfCurrentHour = currentCityDataHourly.hourly.time.indexOf(`TodayT${simpleHour}:00`); 
  const indexOfCurrentHourPlusOneDay = currentCityDataHourly.hourly.time.indexOf(`Today+1T${hour}:00`);  
  const indexOfCurrentHourPlusTwoDay = currentCityDataHourly.hourly.time.indexOf(`Today+2T${hour}:00`);  
  const indexOfCurrentHourPlusThreeDay = currentCityDataHourly.hourly.time.indexOf(`Today+3T${hour}:00`); 
  const indexOfCurrentHourPlusFourDay = currentCityDataHourly.hourly.time.indexOf(`Today+4T${hour}:00`);  
  const indexOfCurrentHourPlusFiveDay = currentCityDataHourly.hourly.time.indexOf(`Today+5T${hour}:00`); 
  const indexOfCurrentHourPlusSixDay= currentCityDataHourly.hourly.time.indexOf(`Today+6T${hour}:00`); 

let iconDailyToday=[];

iconDailyToday.push('/images/storm.png');
iconDailyToday.push('/images/cloudy.png');
iconDailyToday.push('/images/sun.png');
iconDailyToday.push('/images/fog.png');
iconDailyToday.push('/images/rain.png');
iconDailyToday.push('/images/snow.png');

let iconDailyMonday=[];

iconDailyMonday.push('/images/storm.png');
iconDailyMonday.push('/images/cloudy.png');
iconDailyMonday.push('/images/sun.png');
iconDailyMonday.push('/images/fog.png');
iconDailyMonday.push('/images/rain.png');
iconDailyMonday.push('/images/snow.png');

let iconDailyTuesday=[];

iconDailyTuesday.push('/images/storm.png');
iconDailyTuesday.push('/images/cloudy.png');
iconDailyTuesday.push('/images/sun.png');
iconDailyTuesday.push('/images/fog.png');
iconDailyTuesday.push('/images/rain.png');
iconDailyTuesday.push('/images/snow.png');

let iconDailyWednesday=[];

iconDailyWednesday.push('/images/storm.png');
iconDailyWednesday.push('/images/cloudy.png');
iconDailyWednesday.push('/images/sun.png');
iconDailyWednesday.push('/images/fog.png');
iconDailyWednesday.push('/images/rain.png');
iconDailyWednesday.push('/images/snow.png');

let iconDailyThursday=[];

iconDailyThursday.push('/images/storm.png');
iconDailyThursday.push('/images/cloudy.png');
iconDailyThursday.push('/images/sun.png');
iconDailyThursday.push('/images/fog.png');
iconDailyThursday.push('/images/rain.png');
iconDailyThursday.push('/images/snow.png');

let iconDailyFriday=[];

iconDailyFriday.push('/images/storm.png');
iconDailyFriday.push('/images/cloudy.png');
iconDailyFriday.push('/images/sun.png');
iconDailyFriday.push('/images/fog.png');
iconDailyFriday.push('/images/rain.png');
iconDailyFriday.push('/images/snow.png');

let iconDailySaturday=[];

iconDailySaturday.push('/images/storm.png');
iconDailySaturday.push('/images/cloudy.png');
iconDailySaturday.push('/images/sun.png');
iconDailySaturday.push('/images/fog.png');
iconDailySaturday.push('/images/rain.png');
iconDailySaturday.push('/images/snow.png');
  
  const dailyForecasts = [
    {
      day: dayNames[day],
      image: iconDailyToday,
      minTemp: currentCityData.daily.temperature_2m_min[indexOfToday] + ' °C',
      maxTemp: currentCityData.daily.temperature_2m_max[indexOfToday] + ' °C'
    },
    {
      day: dayNames[day=1],
      image: iconDailyMonday,
      minTemp: currentCityData.daily.temperature_2m_min[indexOfTodayPlusOne] + ' °C',
      maxTemp: currentCityData.daily.temperature_2m_max[indexOfTodayPlusOne] + ' °C'
    },
    {
      name: "Let Off Steam",
      description: "A playlist for one of those days",
      imageUrl: "https://source.unsplash.com/black-and-white-electric-guitar-TW-wknV1oZo"
    },
    {
      name: "Rock",
      description: "Rock your socks",
      imageUrl: "https://source.unsplash.com/grayscale-photo-of-person-in-hoodie-top-watching-a-concert-97p-JwqdyW4"
    }
  ];
const createDailyForecast = (weatherData) => {
  return `

  <div class="column">
      
  <div class="card has-background-black">
    <header class="card-header">
      <p id="cityfocus-today-1-heading" class="card-header-title is-size-5 is-centered has-text-white">
      </p>
    </header>
    <div class="card-image has-background-black">
      <figure class="image">
        <img id="cityfocus-today-1-image" alt="Sun" class="is-16by9">
      </figure>
    </div>
    <footer class="card-content has-background-black pt-6 pb-6">
          <p id="cityfocus-today-1-min-temp" class="content is-size-6 has-text-white is-pulled-left ">
          </p>
          <p id="cityfocus-today-1-max-temp" class="content is-size-6 has-text-white is-pulled-right ">
          </p>
    </footer>
  </div>
  
</div>`
}


