/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * An Armstrong number is equal to the sum of the cubes of its digits.
 * For example, 370 is an Armstrong number because 3*3*3 + 7*7*7 + 0*0*0 = 370.
 * An Armstrong number is often called Narcissistic number.
 *
 */

const armstrongNumber = (num) => {
  if (num < 0 || typeof num !== 'number') return false

  let newSum = 0

  const numArr = num.toString().split('')
  numArr.forEach((num) => {
    newSum += parseInt(num) ** numArr.length
  })

  return newSum === num
}

export { armstrongNumber }
