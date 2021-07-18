/*
 * Median: https://en.wikipedia.org/wiki/Median
 *
 * function averageMedian
 * to find the median value of an array of numbers
 * the numbers in an array will be sorted in ascending order by the function sortNumbers
 * if the length of the array is even number, the median value will be the average of the two middle numbers
 * else if the length of the array is odd number, the median value will be the middle number in the array
 */

 /*
  * Doctests
  * 
  * > averageMedian([8, 9, 1, 2, 5, 10, 11])
  * 8
  * > averageMedian([15, 18, 3, 9, 13, 5])
  * 11
  * > averageMedian([1,2,3,4,6,8])
  * 3.5
  */

function averageMedian(numbers) {
    let median = 0, numLength = numbers.length
    numbers = numbers.sort(sortNumbers)
    
    if (numLength % 2 === 0) {
        median = (numbers[numLength / 2 - 1] + numbers[numLength / 2]) / 2
    } else {
        median = numbers[(numLength - 1) / 2]
    }
    
    return median
}

function sortNumbers(num1, num2) {
    return num1 - num2
}

console.log(averageMedian([8, 9, 1, 2, 5, 10, 11]))
console.log(averageMedian([15, 18, 3, 9, 13, 5]))
console.log(averageMedian([1,2,3,4,6,8]))