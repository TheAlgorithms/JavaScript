'use strict'
/*
    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/average.py

    This script will find the average (mean) of an array of numbers.

    More about mean:
        https://en.wikipedia.org/wiki/Mean
*/

const mean = (nums) => {
  // This is a function returns average/mean of array
  let sum = 0

  // This loop sums all values in the 'nums' array using forEach loop
  nums.forEach(function (current) {
    sum += current
  })

  // Divide sum by the length of the 'nums' array.
  const avg = sum / nums.length
  return avg
}

export { mean }
