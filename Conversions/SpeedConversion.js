/**
 * @function kmphToMph
 * @description Converts speed from kilometers per hour to miles per hour.
 * @param {number} kmph - Speed in kilometers per hour
 * @returns {number} - Speed in miles per hour
 * @see https://en.wikipedia.org/wiki/Miles_per_hour
 * @example kmphToMph(1) => 0.621371
 * @example kmphToMph(100) => 62.1371
 */
const kmphToMph = (kmph) => {
  if (typeof kmph !== 'number' || isNaN(kmph)) {
    throw new TypeError('Input must be a number')
  }
  return kmph * 0.621371
}

/**
 * @function mphToKmph
 * @description Converts speed from miles per hour to kilometers per hour.
 * @param {number} mph - Speed in miles per hour
 * @returns {number} - Speed in kilometers per hour
 * @see https://en.wikipedia.org/wiki/Kilometres_per_hour
 * @example mphToKmph(1) => 1.60934
 * @example mphToKmph(60) => 96.5604
 */
const mphToKmph = (mph) => {
  if (typeof mph !== 'number' || isNaN(mph)) {
    throw new TypeError('Input must be a number')
  }
  return mph * 1.60934
}

export { kmphToMph, mphToKmph }
