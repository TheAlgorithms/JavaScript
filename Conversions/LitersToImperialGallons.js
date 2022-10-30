/**
 * This function converts liters to US gallons
 * https://en.wikipedia.org/wiki/Gallon
 * @constructor
 * @param {number} liters - Amount of liters to convert to gallons
 */
const litersToImperialGallons = (liters) => {
  return liters / 4.54609
}

export default litersToImperialGallons
