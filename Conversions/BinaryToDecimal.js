/**
 * Converts a binary string to a decimal number.
 *
 * @param {string} binaryString - The binary string to be converted to decimal.
 * @returns {number} The decimal representation of the binary string.
 */
export default function binaryToDecimal(binaryString) {
  let decimalNumber = 0
  const binaryDigits = binaryString.split('').reverse() // Splits the binary number into reversed single digits
  binaryDigits.forEach((binaryDigit, index) => {
    decimalNumber += binaryDigit * Math.pow(2, index) // Summation of all the decimal converted digits
  })
  return decimalNumber
}
