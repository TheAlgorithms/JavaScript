/*
    author: Hardvan

    This script will check whether the given
    number is even parity or odd parity.

    Even parity is a property of binary numbers,
    where the total number of 1-bits in a number
    is even or odd.

    Reference link: https://en.wikipedia.org/wiki/Parity_bit

    If we will right shift the number by 1 bit
    and XOR it with the original number, the
    result will be 0 if the number has even parity
    and 1 if the number has odd parity.

*/
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
