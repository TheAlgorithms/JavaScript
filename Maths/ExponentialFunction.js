let powerOfX = 1
let factorial = 1
/**
 * @function exponentialFunction
 * @description Calculates the n+1 th order Taylor series approximation of exponential function e^x given n
 * @param {Integer} power
 * @param {Integer} order - 1
 * @returns exponentialFunction(18,4) = 18.4
 * @url https://en.wikipedia.org/wiki/Exponential_function
 */
function exponentialFunction (power, n) {
  if (n === 0) { return 1 }
  const recursion = exponentialFunction(power, n - 1)
  powerOfX = powerOfX * power
  factorial = factorial * n
  return recursion + powerOfX / factorial
}

export {
  exponentialFunction
}
