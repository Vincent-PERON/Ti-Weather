# weatherApp
![](https://zupimages.net/up/22/22/3w39.png)


## Présentation

Le weatherApp est un site internet développé en HTML/CSS/JS
Il permet d'affciher la météo du jour + les prévivions à 5 jours.

L'application appel l'API de [OpenWeatherMap](https://openweathermap.org/)

## Démonstration
Vous pouvez consulter la demo   ici 

## Paramètres

**Récupération de la météo du jour** :
```bash
https://api.openweathermap.org/data/2.5/weather?q=${city},fr&lang=fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric

```

**Récupération des prévisions sur 5 jours** :
```bash
https://api.openweathermap.org/data/2.5/forecast?q=${city},fr&lang=fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric 

```

Pour afficher la météo de votre ville il suffit de modifier le nom de la ville dans l'url
```bash
https://vincent-peron.github.io/weatherApp/index.html?city=Brest 

```
