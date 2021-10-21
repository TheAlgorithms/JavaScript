// https://projecteuler.net/problem=6

export const squareDifference = (num = 100) => {
  let sumOfSquares = 0
  let sums = 0
  for (let i = 1; i <= num; i++) {
    sumOfSquares += i ** 2 // add squares to the sum of squares
    sums += i // add number to sum to square later
  }
  return (sums ** 2) - sumOfSquares // difference of square of the total sum and sum of squares
}
