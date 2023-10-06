/**
 * Problem 23 - Non-Abundant Sums
 *
 * @see {@link https://projecteuler.net/problem=23}
 *
 * A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 *
 * A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
 *
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 *
 */

/**
 * collect the abundant numbers, generate and store their sums with each other, and check for numbers not in the list of sums, adds them and returns their sum.
 * @param {number} [n = 28123]
 * @returns {number}
 */

function sumOfNonAbundantNumbers(n = 28123) {
  const abundantNumbers = [] // array to store the abundant numbers
  const sumOfAbundantNumbers = {} // instead of an array, checking an object takes way less time. sets may be used as well.
  let sum = 0

  for (let i = 1; i <= n; i++) {
    if (isAbundant(i)) {
      abundantNumbers.push(i) // collect the abundant numbers
      abundantNumbers.forEach((num) => {
        // collect their sums
        const sum = num + i
        sumOfAbundantNumbers[sum] = true
      })
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!sumOfAbundantNumbers[i]) {
      // if the number is not found in the list of sums, then it is added
      sum += i
    }
  }

  return sum
}

/**
 * generates the divisors of the number and checks if it is abundant
 * @param {number} number
 * @returns {bool}
 */

function isAbundant(number) {
  let sum = 0
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      // generate divisors
      sum += i // calculate their sums
    }
  }
  return sum > number
}

export { sumOfNonAbundantNumbers }
