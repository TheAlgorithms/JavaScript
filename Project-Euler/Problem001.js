// https://projecteuler.net/problem=1
/*    Multiples of 3 and 5
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

const multiplesThreeAndFive = (num) => {
  if (num < 1) throw new Error('No natural numbers exist below 1')

  let total = 0
  // total for calculating the sum
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i
    }
  }
  return total
}

export { multiplesThreeAndFive }
