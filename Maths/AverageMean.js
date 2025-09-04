/**
 * @function mean
 * @description This script will find the mean value of a array of numbers.
 * @param {number[]} numbers - Array of integer
 * @return {number} - mean of numbers.
 * @throws {TypeError} If the input is not an array or contains non-number elements.
 * @throws {Error} If the input array is empty.
 * @see [Mean](https://en.wikipedia.org/wiki/Mean)
 * @example mean([1, 2, 4, 5]) = 3
 * @example mean([10, 40, 100, 20]) = 42.5
 */
const mean = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Invalid Input')
  } else if (numbers.length === 0) {
    throw new Error('Array is empty')
  }

  let total = 0
  numbers.forEach((num) => {
    if (typeof num !== 'number') {
      throw new TypeError('Invalid Input')
    }
    total += num
  })

  return total / numbers.length
}

export { mean }
