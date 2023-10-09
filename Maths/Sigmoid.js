/**
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Sigmoid_function)
 * Calculate the Sigmoid value of a given number.
 * @param {number} x- The input number.
 * @returns {number} The Sigmoid value of the input.
 */

const sigmoid = (x) => 1 / (1 + Math.exp(-x))

export { sigmoid }
