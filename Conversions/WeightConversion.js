/**
 * @function kilogramsToPounds
 * @description Converts weight from kilograms to pounds.
 * @param {number} kg - Weight in kilograms
 * @returns {number} - Weight in pounds
 * @see https://en.wikipedia.org/wiki/Pound_(mass)
 * @example kilogramsToPounds(1) => 2.20462
 * @example kilogramsToPounds(10) => 22.0462
 */
const kilogramsToPounds = (kg) => {
  if (typeof kg !== 'number' || isNaN(kg)) {
    throw new TypeError('Input must be a number')
  }
  return kg * 2.20462
}

/**
 * @function poundsToKilograms
 * @description Converts weight from pounds to kilograms.
 * @param {number} pounds - Weight in pounds
 * @returns {number} - Weight in kilograms
 * @see https://en.wikipedia.org/wiki/Kilogram
 * @example poundsToKilograms(1) => 0.453592
 * @example poundsToKilograms(10) => 4.53592
 */
const poundsToKilograms = (pounds) => {
  if (typeof pounds !== 'number' || isNaN(pounds)) {
    throw new TypeError('Input must be a number')
  }
  return pounds * 0.453592
}

export { kilogramsToPounds, poundsToKilograms }
