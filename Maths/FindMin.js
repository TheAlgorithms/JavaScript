/**
 * @function FindMin
 * @description Function to find the minimum number given in an array of Numbers.
 * @param {Number[]} nums - Array of Numbers
 * @return {Number} - The minimum number of the array.
 */

const findMin = (...nums) => {
  if (nums.length === 0) {
    throw new TypeError('Array is empty')
  }

  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
    }
  }

  return min
}

export { findMin }
