function intToHex (num) {
  switch (num) {
    case 10: return 'A'
    case 11: return 'B'
    case 12: return 'C'
    case 13: return 'D'
    case 14: return 'E'
    case 15: return 'F'
  }
  return num
}

function decimalToHex (num) {
  const hexOut = []
  while (num > 15) {
    hexOut.unshift(intToHex(num % 16))
    num = Math.floor(num / 16)
  }
  return intToHex(num) + hexOut.join('')
}

export { decimalToHex }
