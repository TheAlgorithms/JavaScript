/**
 * Problem 13 - Large Sum
 *
 * @see {@link https://projecteuler.net/problem=13}
 *
 * Work out the first ten digits of the sum of the given one-hundred 50-digit numbers.
 */

/**
 * calculates the sum and returns first 10 digits.
 * @param {String} nums
 * @returns {Number}
 */

export const largeSum = (nums) => {
  const arr = nums.split('\n') // convert to array of strings
  let sum = 0n
  for (const item of arr) {
    sum += BigInt(item)
  } // calculate the sum
  const res = parseInt(sum.toString().substring(0, 11).replace('.', '')) // convert the sum to a string, get the first 10 digits and remove the decimal
  return res
}
