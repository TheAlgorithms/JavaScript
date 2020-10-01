/*
    author: vivek9patel
    license: GPL-3.0 or later

    This script will find number of 1's
    in binary representain of given number

*/

function BinaryCountSetBits (a) {
  'use strict'
  // convert number into binary representation and return number of set bits in binary representaion
  return a.toString(2).split('1').length - 1
}

// Run `binary_and` Function to find the binary and operation
console.log(BinaryCountSetBits(251))
