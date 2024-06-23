/*
 * Median: https://en.wikipedia.org/wiki/Median
 *
 * function averageMedian
 * to find the median value of an array of numbers
 * the numbers in an array will be sorted in ascending order by the function sortNumbers
 * if the length of the array is even number, the median value will be the average of the two middle numbers
 * else if the length of the array is odd number, the median value will be the middle number in the array
 */
/**
 * Function to find the median value of an array of numbers.
 * @param {number[]}
 * @returns {number} - The median value of the array.
 */
const averageMedian = (sourceArrayOfNumbers) => {
  const numbers = [...sourceArrayOfNumbers].sort(sortNumbers)
  const numLength = numbers.length

  return numLength % 2 === 0
    ? (numbers[numLength / 2 - 1] + numbers[numLength / 2]) / 2
    : numbers[Math.floor(numLength / 2)]
}
/**
 * Comparator function to sort numbers in ascending order.
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const sortNumbers = (num1, num2) => num1 - num2

export { averageMedian }
