// https://projecteuler.net/problem=6

const num = 100 // number we are checking; change to 10 to check 10 from example

const squareDifference = (num) => {
  let sumOfSquares = 0
  let sums = 0
  for (let i = 1; i <= num; i++) {
    sumOfSquares += i ** 2 // add squares to the sum of squares
    sums += i // add number to sum to square later
  }
  return (sums ** 2) - sumOfSquares // difference of square of the total sum and sum of squares
}

console.log(squareDifference(num))
