/*
  A program to demonstrate the implementation of the signum function,
  also known as the sign function, in JavaScript.

  The signum function is an odd mathematical function, which returns the
  sign of the provided real number.
  It can return 3 values: 1 for values greater than zero, 0 for zero itself,
  and -1 for values less than zero

  Wikipedia: https://en.wikipedia.org/wiki/Sign_function
*/

/**
 * @param {Number} input
 * @returns {-1 | 0 | 1 | NaN} sign of input (and NaN if the input is not a number)
 */
function signum (input) {
  if (input === 0) return 0
  if (input > 0) return 1
  if (input < 0) return -1

  return NaN
}

export { signum }
