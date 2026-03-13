/** 
 * This function will accept an array and a target value,
 * and return the indexes of the two numbers that add up to the target.
 * If no such pair exists, it returns null.
 * @param {number[]} nums - array of numbers
 * @param {number} target - target sum
 * @returns {number[] | null} - array containing two indexes or null
 */

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) 
        return [i, j]
    }
  }
  return null
}

export { twoSum }
