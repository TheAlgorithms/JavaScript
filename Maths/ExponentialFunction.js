import { calcFactorial } from './Factorial.js'

/**
 * @function exponentialFunction
 * @description Calculates the n+1 th order Taylor series approximation of exponential function e^x given n
 * @param {Integer} power
 * @param {Integer} order - 1
 * @returns exponentialFunction(2,20) = 7.3890560989301735
 * @url https://en.wikipedia.org/wiki/Exponential_function
 */
function exponentialFunction (power, n) {
  let output = 0
  if (isNaN(power) || isNaN(n) || n < 0) {
    throw new TypeError('Invalid Input')
  }
  if (n === 0) { return 1 }
  for (let i = 0; i < n; i++) {
    output += (power ** i) / calcFactorial(i)
  }
  return output
}

export {
  exponentialFunction
}