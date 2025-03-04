'use strict'
// author: Smit Gabani
// https://github.com/smitgabani

/**
 * explanation link: https://iq.opengenus.org/brian-kernighan-algorithm/
 * Brain Kernighan's Algorithm for Counting Set Bits
 * @param: num takes number whose number of set bit is to be found
 * @return: the count of set bits in the binary equivalent
 * */
function CountSetBits (num) {
  let cnt = 0
  while (num > 0) {
    cnt++
    num &= (num - 1)
  }
  return cnt
}
// console.log(CountSetBits(10))
// expected output: 2

export { CountSetBits }
