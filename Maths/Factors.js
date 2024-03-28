/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * More on Factors:
 *      https://www.mathsisfun.com/definitions/factor.html
 *
 */
/**
 * @param {Number} [number=0]
 */
const factorsOfANumber = (number = 0) => {
  return Array.from(Array(number + 1).keys()).filter(
    (num) => number % num === 0
  )
}

export { factorsOfANumber }
