/**
 * @function fahrenheitToCelsius
 * @description Converts a temperature from Fahrenheit to Celsius.
 *   The formula is: C = (F - 32) × 5/9
 * @param {number} fahrenheit - Temperature in Fahrenheit
 * @returns {number} - Temperature in Celsius
 * @see https://en.wikipedia.org/wiki/Celsius
 * @example fahrenheitToCelsius(32) => 0
 * @example fahrenheitToCelsius(212) => 100
 * @example fahrenheitToCelsius(-40) => -40
 */
const fahrenheitToCelsius = (fahrenheit) => {
  if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
    throw new TypeError('Input must be a number')
  }
  return ((fahrenheit - 32) * 5) / 9
}

export { fahrenheitToCelsius }
