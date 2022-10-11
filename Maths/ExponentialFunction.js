let powerOfX = 1
let factorial = 1
/**
 * @function exponentialFunction
 * @description Calculates the n+1 th order Taylor series approximation of exponential function e^x given n
 * @param {Integer} power
 * @param {Integer} order - 1
 * @returns exponentialFunction(2,20) = 7.389056098930604
 * @url https://en.wikipedia.org/wiki/Exponential_function
 */
function exponentialFunction (power, n) {
  if (isNaN(power) || isNaN(n) || n < 0) {
    throw new TypeError('Invalid Input')
  }
  if (n === 0) { return 1 }
  const recursion = exponentialFunction(power, n - 1)
  powerOfX = powerOfX * power
  factorial = factorial * n
  return recursion + powerOfX / factorial
}

export {
  exponentialFunction
}
