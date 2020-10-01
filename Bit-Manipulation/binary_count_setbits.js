/*
    author: vivek9patel
    license: GPL-3.0 or later

    This script will find number of 1's
    in binary representain of given number

*/

function binary_count_setbits(a) {
  "use strict"
  // convert number into binary representation
  let binA = a.toString(2)

  // return number of set bits in binary representaion
  return binA.split("1").length - 1
}

// Run `binary_and` Function to find the binary and operation
console.log(binary_count_setbits(251))
