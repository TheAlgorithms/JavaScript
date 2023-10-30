// https://projecteuler.net/problem=1
/* Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

// This method uses the nSum function to add the nSum for 3 and 5. However, it needs to subtract the nSum for 15 once to avoid double counting.
const multiplesThreeAndFive = (num) => {
  if (num < 1) throw new Error('No natural numbers exist below 1')
  num -= 1
  let sum = 0

  // The nSum function calculates the sum of the first n numbers in the sequence with a common difference of num.
  // Here, n is denoted as frequency.
  const nSum = (num, frequency) => (frequency * (frequency + 1) * num) >> 1

  sum += nSum(3, Math.floor(num / 3))
  sum += nSum(5, Math.floor(num / 5))
  sum -= nSum(15, Math.floor(num / 15))
  return sum
}

export { multiplesThreeAndFive }
