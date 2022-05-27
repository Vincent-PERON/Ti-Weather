// inscrire ici le nom de votre ville
var city = "Gouesnou";



// Affiche la date et l'heure
function pause(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function afficherDate() 
{
  while(true) 
  {
    await pause(1000);
    var cejour = new Date();
    var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    var date = cejour.toLocaleDateString("fr-FR", options);
    var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
    var dateheure = `${date} ${heure}`;
    var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
    document.getElementById('dateheure').innerHTML = dateheure;
  }
}
afficherDate();

// Affiche la température actuelle
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let wind = document.querySelector(".wind");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
  
window.addEventListener("load", () => {
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
  
      // API URL
      const base = `https://api.openweathermap.org/data/2.5/weather?q=${city},fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"`;

      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = 
              Math.floor(data.main.temp - kelvin) + "°C";

          humidity.textContent = data.main.humidity +" %";
          pressure.textContent = data.main.pressure +" hPa";
          wind.textContent = data.wind.speed + " km/h";
          loc.textContent = data.name;
          let icon1 = data.weather[0].icon;
          icon.innerHTML = 
              `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
        });
});