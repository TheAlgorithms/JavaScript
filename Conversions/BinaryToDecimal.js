export default function binaryToDecimal(binaryString) {
  if (typeof binaryString !== 'string') {
    throw new TypeError('Argument is not a string type')
  }

  if (!/^[01]+$/.test(binaryString)) {
    throw new Error('Argument is not a valid binary string!')
  }

  let decimalNumber = 0
  const binaryDigits = binaryString.split('').reverse() // Splits the binary number into reversed single digits
  binaryDigits.forEach((binaryDigit, index) => {
    decimalNumber += binaryDigit * Math.pow(2, index) // Summation of all the decimal converted digits
  })
  return decimalNumber
}
