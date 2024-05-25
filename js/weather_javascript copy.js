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
  
   const currentCityData = weatherData[currentCity + "_daily"]
   const currentCityDataHourly = weatherData[currentCity + "_hourly"]
   const d = new Date();
   const hour = d.getHours() + ':' + d.getMinutes();

           /* const weatherCodeTodayElement = document.getElementById("weatherCodeToday");
            const weatherTodayElement = document.getElementById("weatherToday");
            const weatherCodeTomorrowElement = document.getElementById("weatherCodeTomorrow");

            weatherCodeTodayElement.innerHTML = weatherCode;
            weatherTodayElement.innerHTML = weather;
            weatherCodeTomorrowElement.innerHTML = currentCityData.weather_code[1]; */

           // const now = dayjs(); // create a new date object that represents this time
            //const currentHour = now.hour(); // 0 - 23 as a number

            // we need the index of the current hour in the time array
            // we then use that index to query the termperature_2m data
            //const indexOfCurrentHour = currentCityDataHourly.time.indexOf(`TodayT${currentHour}:00`);
            //const indexOfCurrentHourTomorrow = currentCityData.time.indexOf(`Today+1T${currentHour}:00`);
            //console.log(`The index of the current hour is : ${indexOfCurrentHour}`);
            //console.log(`The index of the current hour tomorrow is : ${indexOfCurrentHourTomorrow}`);

            //const timeElement = document.getElementById("hour");
            //const tempElement = document.getElementById("temp");

            //const tempTomorrowElement = document.getElementById("tempTomorrow");
            //const dayAfterTomorrowElement = document.getElementById("dayAfterTomorrow");

            //const dayElement = document.getElementById("day");
            // const tomorrowElement = document.getElementById("tomorrow");

            //timeElement.innerHTML = `${currentHour}:00`;
            // dayElement.innerHTML = now.format("dddd");
            //tomorrowElement.innerHTML = now.add(1, 'day').format("dddd");
            // dayAfterTomorrowElement.innerHTML = now.add(2, 'day').format("dddd");

             //tempElement.innerHTML = currentCityDataHourly.temperature_2m[indexOfCurrentHour];
            //tempTomorrowElement.innerHTML = currentCityDataHourly.temperature_2m[indexOfCurrentHourTomorrow];

            // const todayMaxTemp = currentCityData.temperature_2m_max[0];
            //const maxTempElement = document.getElementById("maxTemp");
           // maxTempElement.innerHTML = todayMaxTemp;
        
   const apparent_temperature_max = document.getElementById("apparent_temperature_max");
   const wind_gusts_10m_max = document.getElementById("wind_gusts_10m_max");
   const temperature_2m_max = document.getElementById("temperature_2m_max");
   const temperature_2m_min = document.getElementById("temperature_2m_min");
   const wind_speed_10m_max = document.getElementById("wind_speed_10m_max");
   const apparent_temperature_min = document.getElementById("apparent_temperature_min");

   const time = document.getElementById("time");
   const weatherCode = document.getElementById("weatherCode");
   time.innerHTML = currentCityData.daily.time[0];
   weatherCode.innerHTML = currentCityData.daily.weather_code[0];
   



//-----------ICONS-------------------------------//
 // Declare an array object for our array of images

let iconHourly = [];

// Push the URLs to three images to icon https://makersaid.com/array-of-images-in-javascript/
iconHourly.push('/images/storm.png');
iconHourly.push('/images/cloudy.png');
iconHourly.push('/images/sun.png');

  if (currentCityDataHourly.hourly.weather_code === 0) {
   iconHourly = '/images/storm.png';
 } else if ((currentCityDataHourly.hourly.weather_code[0] >=1 ) && (currentCityDataHourly.hourly.weather_code[0] <=3)) {
   iconHourly = '/images/cloudy.png';
 } else {
   iconHourly = '/images/sun.png';
 }


let iconDailyToday=[];

iconDailyToday.push('/images/storm.png');
iconDailyToday.push('/images/cloudy.png');
iconDailyToday.push('/images/sun.png');

let iconWindDaily = [];

 iconWindDaily.push('/images/gust.png');
 iconWindDaily.push('/images/windy.png');
 iconWindDaily.push('/images/sun.png');

let iconDailyMonday=[];

iconDailyMonday.push('/images/storm.png');
iconDailyMonday.push('/images/cloudy.png');
iconDailyMonday.push('/images/sun.png');

let iconDailyTuesday=[];

iconDailyTuesday.push('/images/storm.png');
iconDailyTuesday.push('/images/cloudy.png');
iconDailyTuesday.push('/images/sun.png');

let iconDailyWednesday=[];

iconDailyWednesday.push('/images/storm.png');
iconDailyWednesday.push('/images/cloudy.png');
iconDailyWednesday.push('/images/sun.png');

let iconDailyThursday=[];

iconDailyThursday.push('/images/storm.png');
iconDailyThursday.push('/images/cloudy.png');
iconDailyThursday.push('/images/sun.png');

let iconDailyFriday=[];

iconDailyFriday.push('/images/storm.png');
iconDailyFriday.push('/images/cloudy.png');
iconDailyFriday.push('/images/sun.png');

let iconDailySaturday=[];

iconDailySaturday.push('/images/storm.png');
iconDailySaturday.push('/images/cloudy.png');
iconDailySaturday.push('/images/sun.png');



if (currentCityData.daily.weather_code[0] === 0) {
  iconWindDaily = '/images/gust.png';
} else if ((currentCityData.daily.weather_code[0] >= 1) && (currentCityData.daily.weather_code[0] <= 3)) {
  iconWindDaily = '/images/windy.png';
} else {
  iconWindDaily = '/images/sun.png';
}


if (currentCityData.daily.weather_code[0] === 0) {
  iconDailyToday = '/images/sun.png';
} else if ((currentCityData.daily.weather_code[0] >= 1) && (currentCityData.daily.weather_code[0] <=3)) {
  iconDailyToday = '/images/cloudy.png';
} else {
  iconDailyToday = '/images/storm.png';
}

if (currentCityData.daily.weather_code[1] === 0) {
  iconDailyMonday = '/images/storm.png';
} else if ((currentCityData.daily.weather_code[1] >= 1) && (currentCityData.daily.weather_code[1] <=3)) {
  iconDailyMonday = '/images/cloudy.png';
} else {
  iconDailyMonday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[2] === 0) {
  iconDailyTuesday = '/images/storm.png';
} else if ((currentCityData.daily.weather_code[2] >= 1) && (currentCityData.daily.weather_code[2] <=3)) {
  iconDailyTuesday = '/images/cloudy.png';
} else {
  iconDailyTuesday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[3] === 0) {
  iconDailyWednesday = '/images/storm.png';
} else if ((currentCityData.daily.weather_code[3] >= 1) && (currentCityData.daily.weather_code[3] <=3)) {
  iconDailyWednesday = '/images/cloudy.png';
} else {
  iconDailyWednesday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[4] === 0) {
  iconDailyThursday = '/images/storm.png';
} else if ((currentCityData.daily.weather_code[4] >= 1) && (currentCityData.daily.weather_code[4] <=3)) {
  iconDailyThursday = '/images/cloudy.png';
} else {
  iconDailyThursday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[5] === 0) {
  iconDailyFriday = '/images/storm.png';
} else if ((currentCityData.daily.weather_code[5] >= 1) && (currentCityData.daily.weather_code[5] <=3)) {
  iconDailyFriday = '/images/cloudy.png';
} else {
  iconDailyFriday = '/images/sun.png';
}

if (currentCityData.daily.weather_code[6] === 0) {
  iconDailySaturday = '/images/storm.png';
} else if ((currentCityData.daily.weather_code[6] >= 1) && (currentCityData.daily.weather_code[6] <=3)) {
  iconDailySaturday = '/images/cloudy.png';
} else {
  iconDailySaturday = '/images/sun.png';
}


// Top card Hourly Weather

const cityFocusOneCardTopRightHeading = document.querySelector('#cityfocus-1-top-card-heading');
cityFocusOneCardTopRightHeading.innerHTML = 'Right Now ' + hour; 

const cityFocusOneCardTopRightImage = document.querySelector('#cityfocus-1-top-card-image');
cityFocusOneCardTopRightImage.src =  iconHourly; //'/images/sun.png';

const cityFocusOneCardTopRightTemp = document.querySelector('#cityfocus-1-top-card-temp');
cityFocusOneCardTopRightTemp.innerHTML = currentCityDataHourly.hourly.temperature_2m[0] + ' °C';

const cityFocusOneCardTopRightWind = document.querySelector('#cityfocus-1-top-card-wind');
cityFocusOneCardTopRightWind.innerHTML = currentCityDataHourly.hourly.wind_speed_10m[0] + ' km/h' ;

// Left card
const cityFocusOneCardLeftHeading = document.querySelector('#cityfocus-1-left-card-heading');
cityFocusOneCardLeftHeading.innerHTML = 'Max Temp';

const cityFocusOneCardLeftImage = document.querySelector('#cityfocus-1-left-card-image');
cityFocusOneCardLeftImage.src = iconDailyToday;

const cityFocusOneCardLeftTemp = document.querySelector('#cityfocus-1-left-card-temp');
cityFocusOneCardLeftTemp.innerHTML = currentCityData.daily.temperature_2m_max[0] + ' °C';

// Right card
const cityFocusOneCardRightHeading = document.querySelector('#cityfocus-1-right-card-heading');
cityFocusOneCardRightHeading.innerHTML = 'Min Wind';

const cityFocusOneCardRightImage = document.querySelector('#cityfocus-1-right-card-image');
cityFocusOneCardRightImage.src = iconWindDaily;

const cityFocusOneCardRightTemp = document.querySelector('#cityfocus-1-right-card-temp');
cityFocusOneCardRightTemp.innerHTML = currentCityData.daily.wind_speed_10m_max[0] + ' km/h'; 


// Daily Cities Forecasts 'cities-forecasts.njk'
// Today card
const cityFocusTodayCardHeading = document.querySelector('#cityfocus-today-1-heading');
cityFocusTodayCardHeading.innerHTML = currentCityData.daily.time[0];// 'Today';

const cityFocusTodayCardImage = document.querySelector('#cityfocus-today-1-image');
cityFocusTodayCardImage.src = iconDailyToday;

const cityFocusTodayCardMinTemp = document.querySelector('#cityfocus-today-1-min-temp');
cityFocusTodayCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[0] + ' °C'; 

const cityFocusTodayCardMaxTemp = document.querySelector('#cityfocus-today-1-max-temp');
cityFocusTodayCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[0] + ' °C'; 

// Monday card
const cityFocusMonCardHeading = document.querySelector('#cityfocus-mon-1-heading');
 cityFocusMonCardHeading.innerHTML = 'Monday';

const cityFocusMonCardImage = document.querySelector('#cityfocus-mon-1-image');
cityFocusMonCardImage.src = iconDailyMonday;

const cityFocusMonCardMinTemp = document.querySelector('#cityfocus-mon-1-min-temp');
cityFocusMonCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[1] + ' °C'; 

const cityFocusMonCardMaxTemp = document.querySelector('#cityfocus-mon-1-max-temp');
cityFocusMonCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[1] + ' °C'; 

// Tuesday card
const cityFocusTueCardHeading = document.querySelector('#cityfocus-tue-1-heading');
cityFocusTueCardHeading.innerHTML = 'Tuesday';

const cityFocusTueCardImage = document.querySelector('#cityfocus-tue-1-image');
cityFocusTueCardImage.src = iconDailyTuesday;

const cityFocusTueCardMinTemp = document.querySelector('#cityfocus-tue-1-min-temp');
cityFocusTueCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[2] + ' °C'; 

const cityFocusTueCardMaxTemp = document.querySelector('#cityfocus-tue-1-max-temp');
cityFocusTueCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[2] + ' °C'; 

// Wednesday card
const cityFocusWedCardHeading = document.querySelector('#cityfocus-wed-1-heading');
cityFocusWedCardHeading.innerHTML = 'Wednesday';

const cityFocusWedCardImage = document.querySelector('#cityfocus-wed-1-image');
cityFocusWedCardImage.src = iconDailyWednesday;

const cityFocusWedCardMinTemp = document.querySelector('#cityfocus-wed-1-min-temp');
cityFocusWedCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[3] + ' °C'; 

const cityFocusWedCardMaxTemp = document.querySelector('#cityfocus-wed-1-max-temp');
cityFocusWedCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[3] + ' °C'; 

// Thursday card
const cityFocusThurCardHeading = document.querySelector('#cityfocus-thur-1-heading');
cityFocusThurCardHeading.innerHTML = 'Thursday';

const cityFocusThurCardImage = document.querySelector('#cityfocus-thur-1-image');
cityFocusThurCardImage.src = iconDailyThursday;

const cityFocusThurCardMinTemp = document.querySelector('#cityfocus-thur-1-min-temp');
cityFocusThurCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[4] + ' °C'; 

const cityFocusThurCardMaxTemp = document.querySelector('#cityfocus-thur-1-max-temp');
cityFocusThurCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[4] + ' °C'; 

// Friday card
const cityFocusFriCardHeading = document.querySelector('#cityfocus-fri-1-heading');
cityFocusFriCardHeading.innerHTML = 'Friday';

const cityFocusFriCardImage = document.querySelector('#cityfocus-fri-1-image');
cityFocusFriCardImage.src = iconDailyFriday;

const cityFocusFriCardMinTemp = document.querySelector('#cityfocus-fri-1-min-temp');
cityFocusFriCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[5] + ' °C'; 

const cityFocusFriCardMaxTemp = document.querySelector('#cityfocus-fri-1-max-temp');
cityFocusFriCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[5] + ' °C'; 

// Saturday card
const cityFocusSatCardHeading = document.querySelector('#cityfocus-sat-1-heading');
cityFocusSatCardHeading.innerHTML = 'Saturday';

const cityFocusSatCardImage = document.querySelector('#cityfocus-sat-1-image');
cityFocusSatCardImage.src = iconDailySaturday;

const cityFocusSatCardMinTemp = document.querySelector('#cityfocus-sat-1-min-temp');
cityFocusSatCardMinTemp.innerHTML = currentCityData.daily.temperature_2m_min[6] + ' °C'; 

const cityFocusSatCardMaxTemp = document.querySelector('#cityfocus-sat-1-max-temp');
cityFocusSatCardMaxTemp.innerHTML = currentCityData.daily.temperature_2m_max[6] + ' °C'; 

});


