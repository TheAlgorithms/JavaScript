/*
    Problem statement and Explanation : https://en.wikipedia.org/wiki/Euclidean_algorithm

    In this method, we have followed the iterative approach to first
    find a minimum of both numbers and go to the next step.
*/

/**
 * GetGCD return the gcd of two numbers.
 * @param {Number} arg1 first argument for gcd
 * @param {Number} arg2 second argument for gcd
 * @returns return a `gcd` value of both number.
 */
const getGcd = (arg1, arg2) => {
  // firstly, check that input is a number or not.
  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
    return new TypeError('Argument is not a number.')
  }
  // Find a minimum of both numbers.
  let less = arg1 > arg2 ? arg2 : arg1
  // Iterate the number and find the gcd of the number using the above explanation.
  for (less; less >= 2; less--) {
    if ((arg1 % less === 0) && (arg2 % less === 0)) return (less)
  }

  return (less)
}

module.exports = getGcd
