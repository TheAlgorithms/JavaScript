export const checkEvenParity = (number) => {
  let count = 0
  while (number > 0) {
    count ^= number & 1 // XOR operation to count set bits
    number >>= 1 // Right shift to check the next bit
  }
  return count === 0 // Even parity if count is 0
}

export const checkOddParity = (number) => {
  return !checkEvenParity(number) // Odd parity is the opposite of even parity
}
