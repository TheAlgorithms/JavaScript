/**
 * @function exponentialFunction
 * @description Calculates the n+1 th order Taylor series approximation of exponential function e^x given n
 * @param {Number} power
 * @param {Number} n - 1
 * @returns {Number}
 *  // exponentialFunction(2,20) = 7.3890560989301735
 * @url https://en.wikipedia.org/wiki/Exponential_function
 */
function exponentialFunction(power, n) {
  let output = 0
  let fac = 1
  if (isNaN(power) || isNaN(n) || n < 0) {
    throw new TypeError('Invalid Input')
  }
  if (n === 0) {
    return 1
  }
  for (let i = 0; i < n; i++) {
    output += power ** i / fac
    fac *= i + 1
  }
  return output
}

export { exponentialFunction }
