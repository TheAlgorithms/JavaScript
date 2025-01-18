/**
 * Problem - Sum of Fifth Powers of Digits
 *
 * Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
 *
 * @see {@link https://projecteuler.net/problem=30}
 */

/**
 * Main function to calculate the sum of all numbers that can be expressed
 * as the sum of the fifth powers of their digits.
 *
 * @returns {number} The sum of all numbers that can be written as the sum of fifth powers of their digits.
 */
function sumOfFifthPowers() {
  const fifthPowers = Array.from({ length: 10 }, (_, i) => i ** 5)
  const results = []

  for (let num = 10; num < 354295; num++) {
    const sumOfDigits = num
      .toString()
      .split('')
      .reduce((sum, digit) => sum + fifthPowers[digit], 0)

    if (sumOfDigits === num) {
      results.push(num)
    }
  }

  return results.reduce((acc, curr) => acc + curr, 0)
}

export { sumOfFifthPowers }
