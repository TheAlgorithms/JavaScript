/*
    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/abs.py

    This script will find the absolute value of a number.

    More about absolute values:
        https://en.wikipedia.org/wiki/Absolute_value
*/

const absVal = (num) => {
  // Find absolute value of `num`.
  'use strict'
  if (num < 0) {
    return -num
  }
  // Executes if condition is not met.
  return num
}

export { absVal }
