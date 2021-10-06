/*
Factorial digit sum

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const findFactorialDigitSum = (num) => {
  let result = 0
  const stringifiedNumber = factorize(num).toLocaleString('fullwide', { useGrouping: false })
  stringifiedNumber.split('').map(num => { result += Number(num) })
  return result
}

const factorize = (num) => num === 0 ? 1 : num * factorize(num - 1)

console.log(findFactorialDigitSum(100))
