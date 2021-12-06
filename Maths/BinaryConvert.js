/**
 * @function BinaryConvert
 * @description Convert the decimal to binary.
 * @param {Integer} num - The input integer
 * @return {Integer} - Binary of num.
 * @see [BinaryConvert](https://www.programiz.com/javascript/examples/decimal-binary)
 * @example BinaryConvert(12) = 1100
 * @example BinaryConvert(12 + 2) = 1110
 */

const BinaryConvert = (num) => {
  let power = 1
  let binary = 0

  while (num) {
    const rem = num % 2
    num = Math.floor(num / 2)
    binary = rem * power + binary
    power *= 10
  }

  return binary
}

export { BinaryConvert }
