/**
 *
 * Project Euler 6
 *
 * The sum of the squares of the first ten natural numbers is 385
 * The square of the sum of the first ten natural numbers is 3025
 * Hence the difference between the sum of the
 * squares of the first ten natural numbers and the square of the sum is
 * 3025 - 385 = 2640
 *
 * Find the difference between the sum of the squares
 *  of the first one hundred natural numbers and the square of the sum.
 */

const sumDifferenceSquare = (n) => {
  let sumOfSquares = 0
  let totalSum = 0

  for (let i = 0; i <= n; i++) {
    sumOfSquares += i ** 2
    totalSum += i
  }

  return totalSum ** 2 - sumOfSquares
}

console.log(sumDifferenceSquare(100))
