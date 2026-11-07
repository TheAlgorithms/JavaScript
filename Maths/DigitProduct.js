/**
 * @function digitProduct
 * @description Calculates the product of all digits of a given integer.
 * @param {number} n - A non-negative integer
 * @returns {number} - The product of all digits
 * @see https://en.wikipedia.org/wiki/Multiplicative_digital_root
 * @example digitProduct(123) => 6
 * @example digitProduct(999) => 729
 * @example digitProduct(0) => 0
 */
const digitProduct = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  return String(n)
    .split('')
    .reduce((product, d) => product * Number(d), 1)
}

export { digitProduct }
