const fetch = require('node-fetch')

const APPID = '' // <-- Put your OpenWeatherMap appid here!
const URL_BASE = 'http://api.openweathermap.org/data/2.5/'

async function currentWeather (location) {
  const response = await fetch(`${URL_BASE}weather?q=${location}&appid=${APPID}`)
  const data = await response.json()
  return data
}

async function weatherForecast (location) {
  const response = await fetch(`${URL_BASE}forecast?q=${location}&appid=${APPID}`)
  const data = await response.json()
  return data
}

async function oneCallApi (latitude, longitude) {
  const response = await fetch(`${URL_BASE}onecall?lat=${latitude}&lon=${longitude}&appid=${APPID}`)
  const data = await response.json()
  return data
}

currentWeather('Kolkata')
  .then(data => console.log(data))

weatherForecast('Kolkata')
  .then(data => console.log(data))

oneCallApi(55.68, 12.57)
  .then(data => console.log(data))
