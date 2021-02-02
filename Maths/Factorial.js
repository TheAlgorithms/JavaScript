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
  return [...Array(num).keys()].map(i => i + 1)
}

const calcFactorial = (num) => {
  if (num === 0) {
    return 'The factorial of 0 is 1.'
  }
  if (num < 0) {
    return 'Sorry, factorial does not exist for negative numbers.'
  }
  if (!num) {
    return 'Sorry, factorial does not exist for null or undefined numbers.'
  }
  if (num > 0) {
    const range = calcRange(num)
    const factorial = range.reduce((a, c) => a * c, 1)
    return `The factorial of ${num} is ${factorial}`
  }
}

export { calcFactorial }
