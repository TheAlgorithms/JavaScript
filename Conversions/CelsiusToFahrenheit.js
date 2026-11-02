/**
 * @function celsiusToFahrenheit
 * @description Converts a temperature from Celsius to Fahrenheit.
 *   The formula is: F = (C × 9/5) + 32
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} - Temperature in Fahrenheit
 * @see https://en.wikipedia.org/wiki/Fahrenheit
 * @example celsiusToFahrenheit(0) => 32
 * @example celsiusToFahrenheit(100) => 212
 * @example celsiusToFahrenheit(-40) => -40
 */
const celsiusToFahrenheit = (celsius) => {
  if (typeof celsius !== 'number' || isNaN(celsius)) {
    throw new TypeError('Input must be a number')
  }
  return (celsius * 9) / 5 + 32
}

export { celsiusToFahrenheit }
