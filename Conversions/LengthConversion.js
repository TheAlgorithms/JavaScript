/**
 * @function metresToFeet
 * @description Converts length from metres to feet.
 * @param {number} metres - Length in metres
 * @returns {number} - Length in feet
 * @see https://en.wikipedia.org/wiki/Foot_(unit)
 * @example metresToFeet(1) => 3.28084
 * @example metresToFeet(10) => 32.8084
 */
const metresToFeet = (metres) => {
  if (typeof metres !== 'number' || isNaN(metres)) {
    throw new TypeError('Input must be a number')
  }
  return metres * 3.28084
}

/**
 * @function feetToMetres
 * @description Converts length from feet to metres.
 * @param {number} feet - Length in feet
 * @returns {number} - Length in metres
 * @see https://en.wikipedia.org/wiki/Metre
 * @example feetToMetres(1) => 0.3048
 * @example feetToMetres(10) => 3.048
 */
const feetToMetres = (feet) => {
  if (typeof feet !== 'number' || isNaN(feet)) {
    throw new TypeError('Input must be a number')
  }
  return feet * 0.3048
}

export { metresToFeet, feetToMetres }
