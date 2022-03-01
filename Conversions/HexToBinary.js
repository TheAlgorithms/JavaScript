const binLookup = (key) => ({
  0: '0000',
  1: '0001',
  2: '0010',
  3: '0011',
  4: '0100',
  5: '0101',
  6: '0110',
  7: '0111',
  8: '1000',
  9: '1001',
  a: '1010',
  b: '1011',
  c: '1100',
  d: '1101',
  e: '1110',
  f: '1111',
}[key.toLowerCase()])

const hexToBinary = (hexString) => {
  /*
    Function for converting Hex to Binary

    1. We convert every hexadecimal bit to 4 binary bits
    2. Conversion goes by searching in the lookup table

    */
  const hexLexemes = hexString.split('')
  return hexLexemes.map(lexeme => binLookup(lexeme)).join('')
}

export default hexToBinary
