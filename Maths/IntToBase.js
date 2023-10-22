/**
 * @function intToBase
 * @description Convert a number from decimal system to another (till decimal)
 * @param {Number} number Number to be converted
 * @param {Number} base Base of new number system
 * @returns {String} Converted Number
 * @see [HornerMethod](https://en.wikipedia.org/wiki/Horner%27s_method)
 * @example
 * const num1 = 125 // Needs to be converted to the binary number system
 * gornerScheme(num, 2); // ===> 1111101
 * @example
 * const num2 = 125 // Needs to be converted to the octal number system
 * gornerScheme(num, 8); // ===> 175
 */
const intToBase = (number, base) => {
  if (typeof number !== 'number' || typeof base !== 'number') {
    throw new Error('Input data must be numbers')
  }
  // Zero in any number system is zero
  if (number === 0) {
    return '0'
  }
  let absoluteValue = Math.abs(number)
  let convertedNumber = ''
  while (absoluteValue > 0) {
    // Every iteration last digit is taken away
    // and added to the previous one
    const lastDigit = absoluteValue % base
    convertedNumber = lastDigit + convertedNumber
    absoluteValue = Math.trunc(absoluteValue / base)
  }
  // Result is whether negative or positive,
  // depending on the original value
  if (number < 0) {
    convertedNumber = '-' + convertedNumber
  }
  return convertedNumber
}

export { intToBase }
