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

  console.log(`The index of the current hour is : ${indexOfToday}`);
  console.log(`The index of the current hour tomorrow is : ${indexOfCurrentHour}`);

          /* const weatherCodeTodayElement = document.getElementById("weatherCodeToday");
            const weatherTodayElement = document.getElementById("weatherToday");
            const weatherCodeTomorrowElement = document.getElementById("weatherCodeTomorrow");

            weatherCodeTodayElement.innerHTML = weatherCode;
            weatherTodayElement.innerHTML = weather;
            weatherCodeTomorrowElement.innerHTML = dailyData.weather_code[1];

            const now = dayjs(); // create a new date object that represents this time
            const currentHour = now.hour(); // 0 - 23 as a number

            // we need the index of the current hour in the time array
            // we then use that index to query the termperature_2m data
            const indexOfCurrentHour = hourlyData.time.indexOf(`TodayT${currentHour}:00`);
            const indexOfCurrentHourTomorrow = hourlyData.time.indexOf(`Today+1T${currentHour}:00`);

            const indexOfCurrentHour = hourlyData.time.indexOf(`TodayT${hour}`);
            const indexOfCurrentHourTomorrow = hourlyData.time.indexOf(`Today+1T${hour}:00`);

            console.log(`The index of the current hour is : ${indexOfCurrentHour}`);
            console.log(`The index of the current hour tomorrow is : ${indexOfCurrentHourTomorrow}`);

            const timeElement = document.getElementById("time");
            const tempElement = document.getElementById("temp");

            const tempTomorrowElement = document.getElementById("tempTomorrow");
            const dayAfterTomorrowElement = document.getElementById("dayAfterTomorrow");

            const dayElement = document.getElementById("day");
            const tomorrowElement = document.getElementById("tomorrow");

            timeElement.innerHTML = `${currentHour}:00`;
            dayElement.innerHTML = now.format("dddd");
            tomorrowElement.innerHTML = now.add(1, 'day').format("dddd");
            dayAfterTomorrowElement.innerHTML = now.add(2, 'day').format("dddd");

            tempElement.innerHTML = hourlyData.temperature_2m[indexOfCurrentHour];
            tempTomorrowElement.innerHTML = hourlyData.temperature_2m[indexOfCurrentHourTomorrow];

            const todayMaxTemp = dailyData.temperature_2m_max[0];
            const maxTempElement = document.getElementById("maxTemp");
            maxTempElement.innerHTML = todayMaxTemp; */
      

            
   

  
            

  const apparent_temperature_max = document.getElementById("apparent_temperature_max");
  const wind_gusts_10m_max = document.getElementById("wind_gusts_10m_max");
  const temperature_2m_max = document.getElementById("temperature_2m_max");
  const temperature_2m_min = document.getElementById("temperature_2m_min");
  const wind_speed_10m_max = document.getElementById("wind_speed_10m_max");
  const apparent_temperature_min = document.getElementById("apparent_temperature_min");
  
  const dayElement = document.getElementById("day");
  const tempTomorrowElement = document.getElementById("tempTomorrow");

  
  
  //const time = document.getElementById("time");
  const weatherCode = document.getElementById("weatherCode");
  // time.innerHTML = currentCityData.daily.time[0];
  dayElement.innerHTML= "Today is " + dayNames[day];
 // tempTomorrowElement.innerHTML = currentCityDataHourly.temperature_2m[indexOfCurrentHourTomorrow];
  weatherCode.innerHTML = currentCityData.daily.weather_code[0];
  



//-----------ICONS-------------------------------//
// Declare an array object for our array of images

let iconHourly = [];

// Push the URLs to three images to icon https://makersaid.com/array-of-images-in-javascript/
iconHourly.push('/images/storm.png');
iconHourly.push('/images/cloudy.png');
iconHourly.push('/images/sun.png');
iconHourly.push('/images/fog.png');
iconHourly.push('/images/rain.png');
iconHourly.push('/images/snow.png');

 if (currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] === 0) {
  iconHourly = '/images/sun.png';
} else if ((currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] >=1 ) && (currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] <=44)) {
  iconHourly = '/images/cloudy.png';
} else if ((currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] >= 45) && (currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] <=48)) {
  iconHourly = '/images/fog.png';
} else if ((currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] >= 49) && (currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] <=70)) {
  iconHourly  = '/images/rain.png';
}  else if ((currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] >= 71) && (currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] <=77)) {
  iconHourly = '/images/snow.png';
}  else if ((currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] >= 78) && (currentCityDataHourly.hourly.weather_code[indexOfCurrentHour] <=84)) {
  iconHourly  = '/images/rain.png';
} else {
  iconHourly  = '/images/sun.png';
}

let iconDailyToday=[];

iconDailyToday.push('/images/storm.png');
iconDailyToday.push('/images/cloudy.png');
iconDailyToday.push('/images/sun.png');
iconDailyToday.push('/images/fog.png');
iconDailyToday.push('/images/rain.png');
iconDailyToday.push('/images/snow.png');

let iconWindDaily = [];

iconWindDaily.push('/images/gust.png');
iconWindDaily.push('/images/windy.png');
iconWindDaily.push('/images/sun.png');

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



if (currentCityData.daily.weather_code[indexOfToday] === 0) {
 iconWindDaily = '/images/gust.png';
} else if ((currentCityData.daily.weather_code[indexOfToday] >= 1) && (currentCityData.daily.weather_code[indexOfToday] <= 3)) {
 iconWindDaily = '/images/windy.png';
} else {
 iconWindDaily = '/images/sun.png';
}


if (currentCityData.daily.weather_code[indexOfToday] === 0) {
  iconDailyToday = '/images/sun.png';
} else if ((currentCityData.daily.weather_code[indexOfToday] >= 1) && (currentCityData.daily.weather_code[indexOfToday] <=3)) {
  iconDailyToday = '/images/cloudy.png';
} else if ((currentCityData.daily.weather_code[indexOfToday] >= 45) && (currentCityData.daily.weather_code[indexOfToday] <=48)) {
  iconDailyToday = '/images/fog.png';
} else if ((currentCityData.daily.weather_code[indexOfToday] >= 51) && (currentCityData.daily.weather_code[indexOfToday] <=67)) {
  iconDailyToday = '/images/rain.png';
} else if ((currentCityData.daily.weather_code[indexOfToday] >= 80) && (currentCityData.daily.weather_code[indexOfToday] <=82)) {
  iconDailyToday = '/images/rain.png';
}  else if ((currentCityData.daily.weather_code[indexOfToday] >= 71) && (currentCityData.daily.weather_code[indexOfToday] <=75)) {
  iconDailyToday = '/images/snow.png';
} else if (currentCityData.daily.weather_code[indexOfToday] === 95){
  iconDailyToday = '/images/storm.png';
} else {
  iconDailyToday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[indexOfTodayPlusOne] === 0) {
  iconDailyMonday = '/images/sun.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusOne] >= 1) && (currentCityData.daily.weather_code[indexOfTodayPlusOne] <=3)) {
  iconDailyMonday = '/images/cloudy.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusOne] >= 45) && (currentCityData.daily.weather_code[indexOfTodayPlusOne] <=48)) {
  iconDailyMonday = '/images/fog.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusOne] >= 51) && (currentCityData.daily.weather_code[indexOfTodayPlusOne] <=67)) {
  iconDailyMonday = '/images/rain.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusOne] >= 80) && (currentCityData.daily.weather_code[indexOfTodayPlusOne] <=82)) {
  iconDailyMonday  = '/images/rain.png';
}  else if ((currentCityData.daily.weather_code[indexOfTodayPlusOne] >= 71) && (currentCityData.daily.weather_code[indexOfTodayPlusOne] <=75)) {
  iconDailyMonday = '/images/snow.png';
} else if (currentCityData.daily.weather_code[indexOfTodayPlusOne] === 95){
  iconDailyMonday = '/images/storm.png';
} else {
  iconDailyMonday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[indexOfTodayPlusTwo] === 0) {
  iconDailyTuesday = '/images/sun.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusTwo] >= 1) && (currentCityData.daily.weather_code[indexOfTodayPlusTwo] <=3)) {
  iconDailyTuesday = '/images/cloudy.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusTwo] >= 45) && (currentCityData.daily.weather_code[indexOfTodayPlusTwo] <=48)) {
  iconDailyTuesday = '/images/fog.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusTwo] >= 51) && (currentCityData.daily.weather_code[indexOfTodayPlusTwo] <=67)) {
  iconDailyTuesday = '/images/rain.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusTwo] >= 80) && (currentCityData.daily.weather_code[indexOfTodayPlusTwo] <=82)) {
  iconDailyTuesday = '/images/rain.png';
}  else if ((currentCityData.daily.weather_code[indexOfTodayPlusTwo] >= 71) && (currentCityData.daily.weather_code[indexOfTodayPlusTwo] <=75)) {
  iconDailyTuesday = '/images/snow.png';
} else if (currentCityData.daily.weather_code[indexOfTodayPlusTwo] === 95){
  iconDailyTuesday = '/images/storm.png';
} else {
  iconDailyTuesday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[indexOfTodayPlusThree] === 0) {
  iconDailyWednesday = '/images/sun.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusThree] >= 1) && (currentCityData.daily.weather_code[indexOfTodayPlusThree] <=3)) {
  iconDailyWednesday = '/images/cloudy.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusThree] >= 45) && (currentCityData.daily.weather_code[indexOfTodayPlusThree] <=48)) {
  iconDailyWednesday = '/images/fog.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusThree] >= 51) && (currentCityData.daily.weather_code[indexOfTodayPlusThree] <=67)) {
  iconDailyWednesday = '/images/rain.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusThree] >= 80) && (currentCityData.daily.weather_code[indexOfTodayPlusThree] <=82)) {
  iconDailyWednesday = '/images/rain.png';
}  else if ((currentCityData.daily.weather_code[indexOfTodayPlusThree] >= 71) && (currentCityData.daily.weather_code[indexOfTodayPlusThree] <=75)) {
  iconDailyWednesday = '/images/snow.png';
} else if (currentCityData.daily.weather_code[indexOfTodayPlusThree] === 95){
  iconDailyWednesday = '/images/storm.png';
} else {
  iconDailyWednesday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[indexOfTodayPlusFour] === 0) {
  iconDailyThursday = '/images/sun.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusFour] >= 1) && (currentCityData.daily.weather_code[indexOfTodayPlusFour] <=3)) {
  iconDailyThursday = '/images/cloudy.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusFour] >= 45) && (currentCityData.daily.weather_code[indexOfTodayPlusFour] <=48)) {
  iconDailyThursday = '/images/fog.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusFour] >= 51) && (currentCityData.daily.weather_code[indexOfTodayPlusFour] <=67)) {
  iconDailyThursday = '/images/rain.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusFour] >= 80) && (currentCityData.daily.weather_code[indexOfTodayPlusFour] <=82)) {
  iconDailyThursday = '/images/rain.png';
}  else if ((currentCityData.daily.weather_code[indexOfTodayPlusFour] >= 71) && (currentCityData.daily.weather_code[indexOfTodayPlusFour] <=75)) {
  iconDailyThursday = '/images/snow.png';
} else if (currentCityData.daily.weather_code[indexOfTodayPlusFour] === 95){
  iconDailyThursday = '/images/storm.png';
} else {
  iconDailyThursday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[indexOfTodayPlusFive] === 0) {
 iconDailyFriday = '/images/sun.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusFive] >= 1) && (currentCityData.daily.weather_code[indexOfTodayPlusFive] <=3)) {
  iconDailyFriday = '/images/cloudy.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusFive] >= 45) && (currentCityData.daily.weather_code[indexOfTodayPlusFive] <=48)) {
  iconDailyFriday = '/images/fog.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusFive] >= 51) && (currentCityData.daily.weather_code[indexOfTodayPlusFive] <=67)) {
  iconDailyFriday = '/images/rain.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusFive] >= 80) && (currentCityData.daily.weather_code[indexOfTodayPlusFive] <=82)) {
  iconDailyFriday = '/images/rain.png';
}  else if ((currentCityData.daily.weather_code[indexOfTodayPlusFive] >= 71) && (currentCityData.daily.weather_code[indexOfTodayPlusFive] <=75)) {
  iconDailyFriday = '/images/snow.png';
} else if (currentCityData.daily.weather_code[indexOfTodayPlusFive] === 95){
  iconDailyFriday = '/images/storm.png';
} else {
  iconDailyFriday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[indexOfTodayPlusSix] === 0) {
  iconDailySaturday = '/images/sun.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusSix] >= 1) && (currentCityData.daily.weather_code[indexOfTodayPlusSix] <=3)) {
  iconDailySaturday = '/images/cloudy.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusSix] >= 45) && (currentCityData.daily.weather_code[indexOfTodayPlusSix] <=48)) {
  iconDailySaturday = '/images/fog.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusSix] >= 51) && (currentCityData.daily.weather_code[indexOfTodayPlusSix] <=67)) {
  iconDailySaturday = '/images/rain.png';
} else if ((currentCityData.daily.weather_code[indexOfTodayPlusSix] >= 80) && (currentCityData.daily.weather_code[indexOfTodayPlusSix] <=82)) {
  iconDailySaturday = '/images/rain.png';
}  else if ((currentCityData.daily.weather_code[indexOfTodayPlusSix] >= 71) && (currentCityData.daily.weather_code[indexOfTodayPlusSix] <=75)) {
  iconDailySaturday = '/images/snow.png';
} else if (currentCityData.daily.weather_code[indexOfTodayPlusSix] === 95){
  iconDailySaturday = '/images/storm.png';
} else {
  iconDailySaturday = '/images/sun.png';
}


// Top card Hourly Weather

const cityFocusOneCardTopRightHeading = document.querySelector('#cityfocus-1-top-card-heading');
cityFocusOneCardTopRightHeading.innerHTML = `Right Now`; 

const cityFocusOneCardTopRightSubHeading = document.querySelector('#cityfocus-1-top-card-sub-heading');
cityFocusOneCardTopRightSubHeading.innerHTML = `${hour} ${date.toDateString()}`; 

const cityFocusOneCardTopRightImage = document.querySelector('#cityfocus-1-top-card-image');
cityFocusOneCardTopRightImage.src =  iconHourly; //'/images/sun.png';

const cityFocusOneCardTopRightTemp = document.querySelector('#cityfocus-1-top-card-temp');
cityFocusOneCardTopRightTemp.innerHTML = currentCityDataHourly.hourly.temperature_2m[indexOfCurrentHour] + ' °C';

const cityFocusOneCardTopRightWind = document.querySelector('#cityfocus-1-top-card-wind');
cityFocusOneCardTopRightWind.innerHTML = currentCityDataHourly.hourly.wind_speed_10m[indexOfCurrentHour] + ' km/h' ;

// Left card
const cityFocusOneCardLeftHeading = document.querySelector('#cityfocus-1-left-card-heading');
cityFocusOneCardLeftHeading.innerHTML = 'Max Temp';

const cityFocusOneCardLeftImage = document.querySelector('#cityfocus-1-left-card-image');
cityFocusOneCardLeftImage.src = iconDailyToday;

const cityFocusOneCardLeftTemp = document.querySelector('#cityfocus-1-left-card-temp');
cityFocusOneCardLeftTemp.innerHTML = currentCityData.daily.temperature_2m_max[indexOfToday] + ' °C';

// Right card
const cityFocusOneCardRightHeading = document.querySelector('#cityfocus-1-right-card-heading');
cityFocusOneCardRightHeading.innerHTML = 'Min Wind';

const cityFocusOneCardRightImage = document.querySelector('#cityfocus-1-right-card-image');
cityFocusOneCardRightImage.src = iconWindDaily;

const cityFocusOneCardRightTemp = document.querySelector('#cityfocus-1-right-card-temp');
cityFocusOneCardRightTemp.innerHTML = currentCityData.daily.wind_speed_10m_max[indexOfToday] + ' km/h'; 


// Daily Cities Forecasts 'cities-forecasts.njk'
// Today card
const cityFocusTodayCardHeading = document.querySelector('#cityfocus-today-1-heading');
cityFocusTodayCardHeading.innerHTML = dayNames[day];//currentCityData.daily.time[0];// 'Today';

const cityFocusTodayCardImage = document.querySelector('#cityfocus-today-1-image');
cityFocusTodayCardImage.src = iconDailyToday;

 //indexOf(`TodayT${hour}`);

const cityFocusTodayCardMinTemp = document.querySelector('#cityfocus-today-1-min-temp');
cityFocusTodayCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[indexOfToday] + ' °C'; 

const cityFocusTodayCardMaxTemp = document.querySelector('#cityfocus-today-1-max-temp');
cityFocusTodayCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[indexOfToday] + ' °C'; 

// Monday card
const cityFocusMonCardHeading = document.querySelector('#cityfocus-mon-1-heading');
cityFocusMonCardHeading.innerHTML = dayNames[day+1];

const cityFocusMonCardImage = document.querySelector('#cityfocus-mon-1-image');
cityFocusMonCardImage.src = iconDailyMonday;

const cityFocusMonCardMinTemp = document.querySelector('#cityfocus-mon-1-min-temp');
cityFocusMonCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[indexOfTodayPlusOne] + ' °C';//currentCityData.daily.temperature_2m_min[1] + ' °C'; 

const cityFocusMonCardMaxTemp = document.querySelector('#cityfocus-mon-1-max-temp');
cityFocusMonCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[indexOfTodayPlusOne] + ' °C'; 

// Tuesday card
const cityFocusTueCardHeading = document.querySelector('#cityfocus-tue-1-heading');
cityFocusTueCardHeading.innerHTML = dayNames[day+2];

const cityFocusTueCardImage = document.querySelector('#cityfocus-tue-1-image');
cityFocusTueCardImage.src = iconDailyTuesday;

const cityFocusTueCardMinTemp = document.querySelector('#cityfocus-tue-1-min-temp');
cityFocusTueCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[indexOfTodayPlusTwo] + ' °C'; 

const cityFocusTueCardMaxTemp = document.querySelector('#cityfocus-tue-1-max-temp');
cityFocusTueCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[indexOfTodayPlusTwo] + ' °C'; 

// Wednesday card
const cityFocusWedCardHeading = document.querySelector('#cityfocus-wed-1-heading');
cityFocusWedCardHeading.innerHTML = dayNames[day+3];

const cityFocusWedCardImage = document.querySelector('#cityfocus-wed-1-image');
cityFocusWedCardImage.src = iconDailyWednesday;

const cityFocusWedCardMinTemp = document.querySelector('#cityfocus-wed-1-min-temp');
cityFocusWedCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[indexOfTodayPlusThree] + ' °C'; 

const cityFocusWedCardMaxTemp = document.querySelector('#cityfocus-wed-1-max-temp');
cityFocusWedCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[indexOfTodayPlusThree] + ' °C'; 

// Thursday card
const cityFocusThurCardHeading = document.querySelector('#cityfocus-thur-1-heading');
cityFocusThurCardHeading.innerHTML = dayNames[day+4];

const cityFocusThurCardImage = document.querySelector('#cityfocus-thur-1-image');
cityFocusThurCardImage.src = iconDailyThursday;

const cityFocusThurCardMinTemp = document.querySelector('#cityfocus-thur-1-min-temp');
cityFocusThurCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[indexOfTodayPlusFour] + ' °C'; 

const cityFocusThurCardMaxTemp = document.querySelector('#cityfocus-thur-1-max-temp');
cityFocusThurCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[indexOfTodayPlusFour] + ' °C'; 

// Friday card
const cityFocusFriCardHeading = document.querySelector('#cityfocus-fri-1-heading');
cityFocusFriCardHeading.innerHTML = dayNames[day+5];

const cityFocusFriCardImage = document.querySelector('#cityfocus-fri-1-image');
cityFocusFriCardImage.src = iconDailyFriday;

const cityFocusFriCardMinTemp = document.querySelector('#cityfocus-fri-1-min-temp');
cityFocusFriCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[indexOfTodayPlusFive] + ' °C'; 

const cityFocusFriCardMaxTemp = document.querySelector('#cityfocus-fri-1-max-temp');
cityFocusFriCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[indexOfTodayPlusFive] + ' °C'; 

// Saturday card
const cityFocusSatCardHeading = document.querySelector('#cityfocus-sat-1-heading');
cityFocusSatCardHeading.innerHTML = dayNames[day+6];

const cityFocusSatCardImage = document.querySelector('#cityfocus-sat-1-image');
cityFocusSatCardImage.src = iconDailySaturday;

const cityFocusSatCardMinTemp = document.querySelector('#cityfocus-sat-1-min-temp');
cityFocusSatCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[indexOfTodayPlusSix] + ' °C'; 

const cityFocusSatCardMaxTemp = document.querySelector('#cityfocus-sat-1-max-temp');
cityFocusSatCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[indexOfTodayPlusSix] + ' °C'; 

});


