/**
 * @function numberToRoman
 * @description Converts a decimal number to its Roman numeral representation.
 * @param {number} num - A positive integer between 1 and 3999
 * @returns {string} - The Roman numeral representation
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @example numberToRoman(3) => "III"
 * @example numberToRoman(9) => "IX"
 * @example numberToRoman(58) => "LVIII"
 * @example numberToRoman(1994) => "MCMXCIV"
 */
const numberToRoman = (num) => {
  if (!Number.isInteger(num) || num < 1 || num > 3999) {
    throw new TypeError('Input must be an integer between 1 and 3999')
  }
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const symbols = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ]
  let result = ''
  let remaining = num
  for (let i = 0; i < values.length; i++) {
    while (remaining >= values[i]) {
      result += symbols[i]
      remaining -= values[i]
    }
  }
  return result
}

export { numberToRoman }
