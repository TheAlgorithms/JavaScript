/**
 * @function romanToNumber
 * @description Converts a Roman numeral string to its decimal number.
 * @param {string} roman - A valid Roman numeral string
 * @returns {number} - The decimal representation of the Roman numeral
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @example romanToNumber("III") => 3
 * @example romanToNumber("IX") => 9
 * @example romanToNumber("MCMXCIV") => 1994
 */
const romanToNumber = (roman) => {
  if (typeof roman !== 'string' || !/^[IVXLCDM]+$/.test(roman)) {
    throw new TypeError('Input must be a valid Roman numeral string')
  }
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0
  for (let i = 0; i < roman.length; i++) {
    const current = romanValues[roman[i]]
    const next = romanValues[roman[i + 1]]
    if (next && current < next) {
      result -= current
    } else {
      result += current
    }
  }
  return result
}

export { romanToNumber }
