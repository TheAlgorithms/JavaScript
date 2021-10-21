/*
    author: vivek9patel
    license: GPL-3.0 or later

    This script will find number of 1's
    in binary representation of given number

*/

function BinaryCountSetBits (a) {
  'use strict'
  // convert number into binary representation and return number of set bits in binary representation
  return a.toString(2).split('1').length - 1
}

export { BinaryCountSetBits }
