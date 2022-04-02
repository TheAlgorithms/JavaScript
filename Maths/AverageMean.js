/**
 * @function mean
 * @description This script will find the mean value of a array of numbers.
 * @param {Integer[]} nums - Array of integer
 * @return {Integer} - mean of nums.
 * @see [Mean](https://en.wikipedia.org/wiki/Mean)
 * @example mean([1, 2, 4, 5]) = 3
 * @example mean([10, 40, 100, 20]) = 42.5
 */

const mean = (nums) => {
  if (!Array.isArray(nums)) {
    throw new TypeError('Invalid Input')
  }

  // This loop sums all values in the 'nums' array using forEach loop
  const sum = nums.reduce((sum, cur) => sum + cur, 0)

  // Divide sum by the length of the 'nums' array.
  return sum / nums.length
}

export { mean }
