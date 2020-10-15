/*
Sum square difference
The sum of the squares of the first ten natural numbers is 385,

The square of the sum of the first ten natural numbers is 3025,

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const findSumSquareDifference = (elementsCount) => {
  const naturalNumbers = Array(elementsCount).fill().map((_, i) => i + 1)

  let sumOfSquares = 0
  naturalNumbers.forEach(number => { sumOfSquares += Math.pow(number, 2) })

  const sumOfNumbers = naturalNumbers.reduce((prev, current) => { current += prev }, 0)
  const squareOfSums = Math.pow(sumOfNumbers, 2)

  return squareOfSums - sumOfSquares
}

console.log(findSumSquareDifference(20))
