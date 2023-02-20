const pad = (num, padlen) => {
  const pad = new Array(1 + padlen).join(0)
  return (pad + num).slice(-pad.length)
}

const hexLookup = (bin) => {
  const branchDetection = new Map()
  let binary = bin
  // 3-1
  if (binary.length < 4) {
    branchDetection.set('hexLookup-1', true)
    binary = pad(binary, 4)
  }
  switch (binary) {
    // 3-2
    case '0000':
      branchDetection.set('hexLookup-2', true)
      return '0'
    // 3-3
    case '0001':
      branchDetection.set('hexLookup-3', true)
      return '1'
    // 3-4
    case '0010':
      branchDetection.set('hexLookup-4', true)
      return '2'
    // 3-5
    case '0011':
      branchDetection.set('hexLookup-5', true)
      return '3'
    // 3-6
    case '0100':
      branchDetection.set('hexLookup-6', true)
      return '4'
    // 3-7
    case '0101':
      branchDetection.set('hexLookup-7', true)
      return '5'
    // 3-8
    case '0110':
      branchDetection.set('hexLookup-8', true)
      return '6'
    // 3-9
    case '0111':
      branchDetection.set('hexLookup-9', true)
      return '7'
    // 3-10
    case '1000':
      branchDetection.set('hexLookup-10', true)
      return '8'
    // 3-11
    case '1001':
      branchDetection.set('hexLookup-11', true)
      return '9'
    // 3-12
    case '1010':
      branchDetection.set('hexLookup-12', true)
      return 'A'
    // 3-13
    case '1011':
      branchDetection.set('hexLookup-13', true)
      return 'B'
    // 3-14
    case '1100':
      branchDetection.set('hexLookup-14', true)
      return 'C'
    // 3-15
    case '1101':
      branchDetection.set('hexLookup-15', true)
      return 'D'
    // 3-16
    case '1110':
      branchDetection.set('hexLookup-16', true)
      return 'E'
    // 3-17
    case '1111':
      branchDetection.set('hexLookup-17', true)
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
