/*
    Decimal To Roman

    This algorithm take decimal number and convert to roman numeral according to standard form (https://en.wikipedia.org/wiki/Roman_numerals#Description)

    Algorithm & Explanation : https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html
*/

const values = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

const orders = [
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

function decimalToRoman(num) {
  let roman = ''
  for (const symbol of orders) {
    while (num >= values[symbol]) {
      roman += symbol
      num -= values[symbol]
    }
  }
  return roman
}

export { decimalToRoman }
