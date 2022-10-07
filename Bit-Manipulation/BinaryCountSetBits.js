/*
    author: vivek9patel
    license: GPL-3.0 or later

    This script will find number of 1's
    in binary representation of given number

*/

function BinaryCountSetBits (a) {
  'use strict'

  // check whether input is an integer, some non-integer number like, 21.1 have non-terminating binary expansions and hence their binary expansion will contain infinite ones, thus the handling of non-integers (including strings,objects etc. as it is meaningless) has been omitted

  if (!Number.isInteger(a)) throw new TypeError('Argument not an Integer')

  // convert number into binary representation and return number of set bits in binary representation
  return a.toString(2).split('1').length - 1
}

export { BinaryCountSetBits }
