function decimalToBinary(num) {
  const bin = []
  while (num > 0) {
    bin.unshift(num % 2)
    num >>= 1 // basically /= 2 without remainder if any
  }
  return bin.join('')
}

export { decimalToBinary }

// > decimalToBinary(2)
// '10'

// > decimalToBinary(7)
// '111'

// > decimalToBinary(35)
// '100011'
