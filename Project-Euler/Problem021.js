/**
 * Amicable numbers
 *
 * P.S.(Project Euler - 021):
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
 * therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 *
 * @param {Number} maxNum
 * @returns {Number} Sum of all amicable numbers under maxNum
 */
export const sumAmicableNum = (maxNum) => {
  const amicNums = []

  for (let i = 1; i < maxNum; i++) {
    const left = d(i)
    const right = d(left)
    if (i === right && i !== left && amicNums.indexOf(i) === -1) {
      amicNums.push(i, left)
    }
  }
  return amicNums.reduce((a, b) => {
    a += b
    return a
  })
}

const d = (num) => {
  const output = []
  for (let i = 1; i < num; i++) {
    if (!(num % i)) { output.push(i) }
  }
  if (!output.length) {
    return 0
  } else {
    return output.reduce((a, b) => {
      a += b
      return a
    })
  }
}
