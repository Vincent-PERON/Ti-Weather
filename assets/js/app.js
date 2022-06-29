// On récupère le nom de la ville inscris dans l'url  index.html?ville=xxxxx
let params = new URLSearchParams(document.location.search);
let cityname = params.get("ville"); 
var city = cityname;


// Affiche le nom de la ville dans l'entête
let cityheader = document.querySelector(".agence");
cityheader.textContent = city;

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

// Manpulation du DOM - Météo actuelle
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let wind = document.querySelector(".wind");
let loc = document.querySelector(".location");
let todayDesc = document.querySelector(".todaydesc");
let icon = document.querySelector(".icon");

// Manpulation du DOM - Météo 5 jours
let temperatureminday1 = document.querySelector(".temp-day-1");
let temperatureminday2 = document.querySelector(".temp-day-2");
let temperatureminday3 = document.querySelector(".temp-day-3");
let temperatureminday4 = document.querySelector(".temp-day-4");
let temperatureminday5 = document.querySelector(".temp-day-5");

let iconday1 = document.querySelector(".icon-day-1");
let iconday2 = document.querySelector(".icon-day-2");
let iconday3 = document.querySelector(".icon-day-3");
let iconday4 = document.querySelector(".icon-day-4");
let iconday5 = document.querySelector(".icon-day-5");

// On déclare une constante kelvin pour convertir la temparature reçue en degré °
const kelvin = 273;
  
window.addEventListener("load", () => {
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
  
      // API URL
      const base = `https://api.openweathermap.org/data/2.5/weather?q=${city},fr&lang=fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric`;
      const base5day = `https://api.openweathermap.org/data/2.5/forecast?q=${city},fr&lang=fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric`;

      // Récupération de la météo du jour
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent =  Math.floor(data.main.temp ) + "°C";

          humidity.textContent = data.main.humidity +" %";
          pressure.textContent = data.main.pressure +" hPa";
          wind.textContent = data.wind.speed + " km/h";
          loc.textContent = data.name;
          icon1 = data.weather[0].icon;
          icon.innerHTML = `<img src="./assets/icons/${icon1}.svg" style="height:18rem; filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(152deg) brightness(103%) contrast(103%); "/>`;
          todayDesc.textContent = data.weather[0].description;
        });


        // Récupération des prévisions sur 5 jours
        fetch(base5day)
        .then((response5day) => {
          return response5day.json();
        })
        .then((data5) => {
          console.log(data5);
          temperatureminday1.textContent = Math.floor(data5.list[7].main.temp)  + "°C"; // J+1
          temperatureminday2.textContent = Math.floor(data5.list[15].main.temp) + "°C"; // J+2
          temperatureminday3.textContent = Math.floor(data5.list[23].main.temp) + "°C"; // J+3
          temperatureminday4.textContent = Math.floor(data5.list[31].main.temp) + "°C"; // J+4
          temperatureminday5.textContent = Math.floor(data5.list[39].main.temp) + "°C"; // J+5
          
          iconj1 = data5.list[7].weather[0].icon;
          iconday1.innerHTML = `<img src="./assets/icons/${iconj1}.svg" style="height:7rem; filter: invert(13%) sepia(43%) saturate(497%) hue-rotate(189deg) brightness(95%) contrast(95%); "/>`;
          
          iconj2 = data5.list[15].weather[0].icon;
          iconday2.innerHTML = `<img src="./assets/icons/${iconj2}.svg" style="height:7rem; filter: invert(13%) sepia(43%) saturate(497%) hue-rotate(189deg) brightness(95%) contrast(95%); "/>`;

          iconj3 = data5.list[23].weather[0].icon;
          iconday3.innerHTML = `<img src="./assets/icons/${iconj3}.svg" style="height:7rem; filter: invert(13%) sepia(43%) saturate(497%) hue-rotate(189deg) brightness(95%) contrast(95%); "/>`;
          
          iconj4 = data5.list[31].weather[0].icon;
          iconday4.innerHTML = `<img src="./assets/icons/${iconj4}.svg" style="height:7rem; filter: invert(13%) sepia(43%) saturate(497%) hue-rotate(189deg) brightness(95%) contrast(95%); "/>`;

          iconj5 = data5.list[39].weather[0].icon;
          iconday5.innerHTML = `<img src="./assets/icons/${iconj5}.svg" style="height:7rem; filter: invert(13%) sepia(43%) saturate(497%) hue-rotate(189deg) brightness(95%) contrast(95%); "/>`;

        });

});

// Affichage des 5 jours prochains
// On récupère les éléments HTML avec leur ID
let j1 = document.querySelector("#jour1");
let j2 = document.querySelector("#jour2");
let j3 = document.querySelector("#jour3");
let j4 = document.querySelector("#jour4");
let j5 = document.querySelector("#jour5");

// On constitue nos 5 jours prochain - ON obtiendra un résultat Thu Jun 23 2022 18:11:12 GMT+0200 (heure d’été d’Europe centrale)
const day1 = new Date(Date.now() + (3600 * 1000 * 24))   // J+1
const day2 = new Date(Date.now() + (7200 * 1000 * 24))   // J+2
const day3 = new Date(Date.now() + (10800 * 1000 * 24))  // J+3
const day4 = new Date(Date.now() + (14400 * 1000 * 24))  // J+4
const day5 = new Date(Date.now() + (18000 * 1000 * 24))  // J+5


// On formate les dates pour n'afficher que le jour et en mode réduit (mer. jeu. ven. )
const jour1 =  day1.toLocaleString("default", { weekday: "short" });
const jour2 =  day2.toLocaleString("default", { weekday: "short" });
const jour3 =  day3.toLocaleString("default", { weekday: "short" });
const jour4 =  day4.toLocaleString("default", { weekday: "short" });
const jour5 =  day5.toLocaleString("default", { weekday: "short" });

// On insère dans le DOM les valeurs 
j1.textContent = jour1
j2.textContent = jour2
j3.textContent = jour3
j4.textContent = jour4
j5.textContent = jour5

