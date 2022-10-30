/**
 * This function converts liters to US gallons
 * @constructor
 * @param {number} liters - Amount of liters to convert to gallons
 * @see https://en.wikipedia.org/wiki/Gallon
 */
const litersToImperialGallons = (liters) => {
  return liters / 4.54609
}

export default litersToImperialGallons
