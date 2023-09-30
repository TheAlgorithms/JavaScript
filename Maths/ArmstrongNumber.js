/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * An Armstrong number is equal to the sum of its own digits each raised to the power of the number of digits.
 * For example, 370 is an Armstrong number because 3*3*3 + 7*7*7 + 0*0*0 = 370.
 * An Armstrong number is often called Narcissistic number.
 *
 */

const armstrongNumber = (num) => {
  if (typeof num !== 'number' || num < 0) return false
  const numStr = num.toString()
  const sum = [...numStr].reduce(
    (acc, digit) => acc + parseInt(digit) ** numStr.length,
    0
  )
  return sum === num
}

export { armstrongNumber }
