/*
 * Author: Akshay Dubey (https://github.com/itsAkshayDubey)
 * Pronic Number: https://en.wikipedia.org/wiki/Pronic_number
 * function to check if number is pronic.
 * return true if number is pronic.
 * else false
 */

/**
 * @function isPronic
 * @description -> Checking if number is pronic using product of two consecutive numbers
 * If number is a product of two consecutive numbers, then it is pronic
 * therefore, the function will return true
 *
 * If number is not a product of two consecutive numbers, then it is not pronic
 * therefore, the function will return false
 * @param {number} number
 * @returns {boolean}
 */

export const isPronic = (number) => {
  if (number === 0) {
    return true
  }
  const sqrt = Math.sqrt(number)
  return sqrt % 1 !== 0 && Math.ceil(sqrt) * Math.floor(sqrt) === number
}
