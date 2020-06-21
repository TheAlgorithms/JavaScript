function maximumNonAdjacentSum (nums) {
  /*
         * Find the maximum non-adjacent sum of the integers in the nums input list
         * :param nums: Array of Numbers
         * :return: The maximum non-adjacent sum
    */

  if (nums.length < 0) return 0

  let maxIncluding = nums[0]
  let maxExcluding = 0

  for (const num of nums.slice(1)) {
    const temp = maxIncluding
    maxIncluding = maxExcluding + num
    maxExcluding = Math.max(temp, maxExcluding)
  }

  return Math.max(maxExcluding, maxIncluding)
}

function main () {
  console.log(maximumNonAdjacentSum([1, 2, 3]))
  console.log(maximumNonAdjacentSum([1, 5, 3, 7, 2, 2, 6]))
  console.log(maximumNonAdjacentSum([-1, -5, -3, -7, -2, -2, -6]))
  console.log(maximumNonAdjacentSum([499, 500, -3, -7, -2, -2, -6]))
}

main()
