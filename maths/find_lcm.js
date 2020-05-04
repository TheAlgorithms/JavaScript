/*
    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/find_lcm.py

    More about LCM:
        https://en.wikipedia.org/wiki/Least_common_multiple
*/

'use strict'

// Find the LCM of two numbers.
function findLcm (num1, num2) {
  var max_num
  var lcm
  // Check to see whether num1 or num2 is larger.
  if (num1 > num2) {
    max_num = num1
  } else {
    max_num = num2
  }
  lcm = max_num

  while (true) {
    if ((lcm % num1 === 0) && (lcm % num2 === 0)) {
      break
    }
    lcm += max_num
  }
  return lcm
}

// Run `findLcm` Function
var num1 = 12
var num2 = 76
console.log(findLcm(num1, num2))
