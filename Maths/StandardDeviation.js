/*
 * Returns the standard deviation given an array of integers
 * @param  number[]   nums    array of integers
 * @return number             standard deviation
 * @see https://en.wikipedia.org/wiki/Standard_deviation
 */
function standardDeviation(nums) {
  if (nums.length < 2) {
    throw new Error('At least two numbers in input array are required!')
  }
  if (!Array.isArray(nums)) {
    throw new TypeError('Array required!')
  }

  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] != 'number') {
      throw new TypeError('Number type required in array input!')
    }
    sum += nums[i]
  }
  let avg = sum / nums.length
  let deviationSquareSum = 0
  for (let i = 0; i < nums.length; i++) {
    let square = Math.pow(nums[i] - avg, 2)
    deviationSquareSum += square
  }

  return Math.sqrt(deviationSquareSum / nums.length)
}

export { standardDeviation }
