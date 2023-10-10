/**
 * Generates a Binary Coded Decimal (BCD 4-bit representation) equivalent of given binary number.
 * @param {string} binaryInput - Binary number in string format to be converted to BCD.
 * @returns {string} - A string equivalent of binary coded decimal (4-bit representation).
 *
 * @see
 * For more info: https://en.wikipedia.org/wiki/Binary-coded_decimal
 *
 * @example
 * const binaryInput = '1100010010'
 * const bcdNum = binaryToBcd(decimal)
 * // bcdNum will be '11110000110'
 */

const bcdEquivalent = (decimalCharacter) => {
  switch (decimalCharacter) {
    case '0':
      return '0000'
    case '1':
      return '0001'
    case '2':
      return '0010'
    case '3':
      return '0011'
    case '4':
      return '0100'
    case '5':
      return '0101'
    case '6':
      return '0110'
    case '7':
      return '0111'
    case '8':
      return '1000'
    case '9':
      return '1001'
  }
}

const isValidBinary = (binaryInput) => {
  for (let i = 0; i < binaryInput.length; i++) {
    if (binaryInput[i] !== '0' && binaryInput[i] !== '1') {
      return false
    }
  }
  return true
}

const binaryToBcd = (binaryInput) => {
  if (!isValidBinary(binaryInput)) {
    throw new Error('Input is not a valid binary number.')
  }

  let decimalInput = parseInt(binaryInput, 2)
  let decimalString = decimalInput.toString()
  let bcdNum = ''
  for (let i = 0; i < decimalString.length; i++) {
    bcdNum += bcdEquivalent(decimalString[i])
  }

  // Remove unnecessary trailing zeros
  let tempDecimal = parseInt(bcdNum, 2)
  bcdNum = tempDecimal.toString(2)

  return bcdNum
}

export { binaryToBcd }
