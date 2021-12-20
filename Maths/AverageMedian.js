/*
 * Median: https://en.wikipedia.org/wiki/Median
 *
 * function averageMedian
 * to find the median value of an array of numbers
 * the numbers in an array will be sorted in ascending order by the function sortNumbers
 * if the length of the array is even number, the median value will be the average of the two middle numbers
 * else if the length of the array is odd number, the median value will be the middle number in the array
 */

const averageMedian = (sourceArrayOfNumbers) => {
  let numbers = [...sourceArrayOfNumbers]
  let median = 0
  const numLength = numbers.length
  numbers = numbers.sort(sortNumbers)

  if (numLength % 2 === 0) {
    median = (numbers[numLength / 2 - 1] + numbers[numLength / 2]) / 2
  } else {
    median = numbers[(numLength - 1) / 2]
  }

  return median
}

const sortNumbers = (num1, num2) => {
  return num1 - num2
}

export { averageMedian }
