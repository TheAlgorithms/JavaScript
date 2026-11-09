/**
 * @function isSmithNumber
 * @description A Smith number is a composite number where the sum of
 *   its digits equals the sum of the digits of its prime factors.
 *   For example, 4: prime factors are 2,2 → 2+2=4, digit sum=4.
 * @param {number} n - A positive integer greater than 1
 * @returns {boolean} - True if n is a Smith number, false otherwise
 * @see https://en.wikipedia.org/wiki/Smith_number
 * @example isSmithNumber(4) => true
 * @example isSmithNumber(22) => true
 * @example isSmithNumber(13) => false
 */
const isSmithNumber = (n) => {
  if (!Number.isInteger(n) || n < 2) {
    throw new TypeError('Input must be an integer greater than or equal to 2')
  }
  const digitSum = (num) =>
    String(num)
      .split('')
      .reduce((sum, d) => sum + Number(d), 0)
  const primeFactors = (num) => {
    const factors = []
    let d = 2
    let temp = num
    while (d * d <= temp) {
      while (temp % d === 0) {
        factors.push(d)
        temp = Math.floor(temp / d)
      }
      d++
    }
    if (temp > 1) factors.push(temp)
    return factors
  }
  const factors = primeFactors(n)
  if (factors.length === 1 && factors[0] === n) return false
  const primeDigitSum = factors.reduce((sum, f) => sum + digitSum(f), 0)
  return digitSum(n) === primeDigitSum
}

export { isSmithNumber }
