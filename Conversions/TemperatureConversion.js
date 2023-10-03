// This files has functions to convert different temperature units
// Functions take temperature value as a argument and returns corresponding converted value

const celsiusToFahrenheit = (celsius) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  return Math.round((celsius * 9) / 5 + 32)
}

const celsiusToKelvin = (celsius) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  return Math.round(celsius + 273.15)
}

const celsiusToRankine = (celsius) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  return Math.round((celsius * 9) / 5 + 491.67)
}

const fahrenheitToCelsius = (fahrenheit) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  return Math.round(((fahrenheit - 32) * 5) / 9)
}

const fahrenheitToKelvin = (fahrenheit) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  return Math.round(((fahrenheit - 32) * 5) / 9 + 273.15)
}

const fahrenheitToRankine = (fahrenheit) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  return Math.round(fahrenheit + 459.67)
}

const kelvinToCelsius = (kelvin) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  return Math.round(kelvin - 273.15)
}

const kelvinToFahrenheit = (kelvin) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  return Math.round(((kelvin - 273.15) * 9) / 5 + 32)
}

const kelvinToRankine = (kelvin) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  return Math.round((kelvin * 9) / 5)
}

const rankineToCelsius = (rankine) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  return Math.round(((rankine - 491.67) * 5) / 9)
}

const rankineToFahrenheit = (rankine) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  return Math.round(rankine - 459.67)
}

const rankineToKelvin = (rankine) => {
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  return Math.round((rankine * 5) / 9)
}

const reaumurToKelvin = (reaumur) => {
  // Reference:- http://www.csgnetwork.com/temp2conv.html
  return Math.round(reaumur * 1.25 + 273.15)
}

const reaumurToFahrenheit = (reaumur) => {
  // Reference:- http://www.csgnetwork.com/temp2conv.html
  return Math.round(reaumur * 2.25 + 32)
}

const reaumurToCelsius = (reaumur) => {
  // Reference:- http://www.csgnetwork.com/temp2conv.html
  return Math.round(reaumur * 1.25)
}

const reaumurToRankine = (reaumur) => {
  // Reference:- http://www.csgnetwork.com/temp2conv.html
  return Math.round(reaumur * 2.25 + 32 + 459.67)
}

export {
  celsiusToFahrenheit,
  celsiusToKelvin,
  celsiusToRankine,
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  fahrenheitToRankine,
  kelvinToCelsius,
  kelvinToFahrenheit,
  kelvinToRankine,
  rankineToCelsius,
  rankineToFahrenheit,
  rankineToKelvin,
  reaumurToCelsius,
  reaumurToFahrenheit,
  reaumurToKelvin,
  reaumurToRankine
}
