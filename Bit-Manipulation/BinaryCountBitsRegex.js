/**
 *author: nikolaospanagopoulos
 *This script will use a RegEx to find number of 1s in a binary representation of a number
 *I tried to think of every possible input
 **/

const countBitsWithRegex = (number) => {
  if (typeof number !== 'number') {
    //because an "" is evaluated to 0
    throw new TypeError('Not a number')
  }
  if (isNaN(number)) {
    //because even NaN is a number. Just not a valid one ex 0/0
    throw new TypeError('Not a valid number')
  }
  if (!Number.isFinite(number)) {
    // In Javascript a number other than 0, devided by 0 return Infinity
    // if devided by -0 returns -Infinity
    throw new TypeError('Not a valid number. Infinity. probably division by 0')
  }
  if (!Number.isInteger(number)) {
    // because if it is floating point number it
    // may have non terminating binary expansions
    throw new TypeError('It is a floating point number')
  }

  //we use regular expression that will match all 1s. g means global match
  return number.toString(2).match(/1/g)?.length || 0
}
