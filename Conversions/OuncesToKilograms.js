/**
 * This function converts ounces to kilograms
 * https://en.wikipedia.org/wiki/Ounce
 * @constructor
 * @param {number} oz - Amount of ounces to convert to kilograms
 */
const ouncesToKilograms = (oz) => {
  return oz * 28.3498 / 1000
}

export default ouncesToKilograms
