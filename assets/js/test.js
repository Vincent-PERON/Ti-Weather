const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

var city = "Gouesnou";

const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},fr&lang=fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric`;

function getWeatherData() {
    let headers = new Headers();
  
    return fetch(URL, {
      method: 'GET',
      headers: headers
    }).then(data => {
      return data.json();
    });
  }

  getWeatherData()