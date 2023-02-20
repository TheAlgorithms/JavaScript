import { logDataToTestFile } from '../util'

const pad = (num, padlen) => {
  const pad = new Array(1 + padlen).join(0)
  return (pad + num).slice(-pad.length)
}

const hexLookup = (bin) => {
  let binary = bin
  // 1
  if (binary.length < 4) {
    logDataToTestFile('hexLookup-1', true)
    binary = pad(binary, 4)
  }
  switch (binary) {
    // 2
    case '0000':
      logDataToTestFile('hexLookup-2', true)
      return '0'
    // 3
    case '0001':
      logDataToTestFile('hexLookup-3', true)
      return '1'
    // 4
    case '0010':
      logDataToTestFile('hexLookup-4', true)
      return '2'
    // 5
    case '0011':
      logDataToTestFile('hexLookup-5', true)
      return '3'
    // 6
    case '0100':
      logDataToTestFile('hexLookup-6', true)
      return '4'
    // 7
    case '0101':
      logDataToTestFile('hexLookup-7', true)
      return '5'
    // 8
    case '0110':
      logDataToTestFile('hexLookup-8', true)
      return '6'
    // 9
    case '0111':
      logDataToTestFile('hexLookup-9', true)
      return '7'
    // 10
    case '1000':
      logDataToTestFile('hexLookup-10', true)
      return '8'
    // 11
    case '1001':
      logDataToTestFile('hexLookup-11', true)
      return '9'
    // 12
    case '1010':
      logDataToTestFile('hexLookup-12', true)
      return 'A'
    // 13
    case '1011':
      logDataToTestFile('hexLookup-13', true)
      return 'B'
    // 14
    case '1100':
      logDataToTestFile('hexLookup-14', true)
      return 'C'
    // 15
    case '1101':
      logDataToTestFile('hexLookup-15', true)
      return 'D'
    // 16
    case '1110':
      logDataToTestFile('hexLookup-16', true)
      return 'E'
    // 17
    case '1111':
      logDataToTestFile('hexLookup-17', true)
      return 'F'
  }
}
const binaryToHex = (binaryString) => {
  /*
  Function for converting Binary to Hex

  1. The conversion will start from Least Significant Digit (LSB) to the Most Significant Bit (MSB).
  2. We divide the bits into sections of 4-bits starting from LSB to MSB.
  3. If the MSB get less than 4 bits, then we pad 0s to the front of it.

  For Example:
  Binary String = '1001101'

  1. Divide it to 2 parts => ['100', '1101']
  2. Pad 0s the MSB so it'll be => ['0100', '1101']
  3. Use the lookup table and merge them, therefore the result is 4D.

  */

  let result = ''
  binaryString = binaryString.split('')
  for (let i = binaryString.length - 1; i >= 0; i = i - 4) {
    if (i >= 3) {
      result += hexLookup(binaryString.slice(i - 3, i + 1).join(''))
    } else {
      result += hexLookup(binaryString.slice(0, i + 1).join(''))
    }
  }
  return result.split('').reverse().join('')
}

export default binaryToHex
