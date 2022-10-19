import { extendedEuclideanGCD } from './ExtendedEuclideanGCD'

/**
 * https://brilliant.org/wiki/modular-arithmetic/
 * @param {Number} arg1 first argument
 * @param {Number} arg2 second argument
 * @returns {Number}
 */

const MOD = 10000007

const isInputValid = (arg1, arg2) => {
  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
    throw new TypeError('Input must be Numbers')
  }
}

/**
 * Modulus is Distributive property,
 * As a result, we separate it into numbers in order to keep it within MOD's range
*/

const add = (arg1, arg2) => {
  isInputValid(arg1, arg2)
  return ((arg1 % MOD) + (arg2 % MOD)) % MOD
}

const subtract = (arg1, arg2) => {
  isInputValid(arg1, arg2)
  // An extra MOD is added to check negative results
  return ((arg1 % MOD) - (arg2 % MOD) + MOD) % MOD
}

const multiply = (arg1, arg2) => {
  isInputValid(arg1, arg2)
  return ((arg1 % MOD) * (arg2 % MOD)) % MOD
}

/**
 *
 * It is not Possible to find Division directly like the above methods,
 * So we have to use the Extended Euclidean Theorem for finding Multiplicative Inverse
 * https://github.com/TheAlgorithms/JavaScript/blob/master/Maths/ExtendedEuclideanGCD.js
 */

const divide = (arg1, arg2) => {
  // 1st Index contains the required result
  // The theorem may have return Negative value, we need to add MOD to make it Positive
  return (extendedEuclideanGCD(arg1, arg2)[1] + MOD) % MOD
}

export { add, subtract, multiply, divide }
