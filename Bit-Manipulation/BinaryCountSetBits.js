/*
    author: vivek9patel
    license: GPL-3.0 or later

    This script will find number of 1's
    in binary representation of given number
    
    T.C - O(logn)
    S.C - O(1)

*/


function BinaryCountSetBits (a) {
  'use strict'

  // check whether input is an integer, some non-integer number like, 21.1 have non-terminating binary expansions and hence their binary expansion will contain infinite ones, thus the handling of non-integers (including strings,objects etc. as it is meaningless) has been omitted

  if (!Number.isInteger(a)) throw new TypeError('Argument not an Integer')

  // convert number into binary representation and return number of set bits in binary representation
  let count = 0
    while (a > 0)
    {
        a &= (a - 1)
        count++
    }
    return count
}

export { BinaryCountSetBits }
