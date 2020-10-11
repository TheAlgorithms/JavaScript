/*
    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/factorial_python.py

    This script will find the factorial of a number provided by the user.

    More about factorials:
        https://en.wikipedia.org/wiki/factorial
*/

'use strict'

const calcRange = (num) => {
  // Generate a range of numbers from 1 to `num`.
  let i = 1
  const range = []
  while (i <= num) {
    range.push(i)
    i += 1
  }
  return range
}

const calcFactorial = (num) => {
  let factorial
  const range = calcRange(num)

  // Check if the number is negative, positive, null, undefined, or zero
  if (num < 0) {
    return 'Sorry, factorial does not exist for negative numbers.'
  }
  if (num === null || num === undefined) {
    return 'Sorry, factorial does not exist for null or undefined numbers.'
  }
  if (num === 0) {
    return 'The factorial of 0 is 1.'
  }
  if (num > 0) {
    factorial = 1
    range.forEach(function (i) {
      factorial = factorial * i
    })
    return `The factorial of ${num} is ${factorial}`
  }
}

export { calcFactorial }
