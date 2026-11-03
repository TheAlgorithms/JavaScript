/**
 * @function litresToGallons
 * @description Converts volume from litres to US gallons.
 * @param {number} litres - Volume in litres
 * @returns {number} - Volume in US gallons
 * @see https://en.wikipedia.org/wiki/Gallon
 * @example litresToGallons(1) => 0.264172
 * @example litresToGallons(10) => 2.64172
 */
const litresToGallons = (litres) => {
  if (typeof litres !== 'number' || isNaN(litres)) {
    throw new TypeError('Input must be a number')
  }
  return litres * 0.264172
}

/**
 * @function gallonsToLitres
 * @description Converts volume from US gallons to litres.
 * @param {number} gallons - Volume in US gallons
 * @returns {number} - Volume in litres
 * @see https://en.wikipedia.org/wiki/Litre
 * @example gallonsToLitres(1) => 3.78541
 * @example gallonsToLitres(10) => 37.8541
 */
const gallonsToLitres = (gallons) => {
  if (typeof gallons !== 'number' || isNaN(gallons)) {
    throw new TypeError('Input must be a number')
  }
  return gallons * 3.78541
}

export { litresToGallons, gallonsToLitres }
