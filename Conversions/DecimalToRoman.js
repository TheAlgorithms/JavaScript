/*
    Decimal To Roman

    This algorithm take decimal number and convert to roman numeral according to standard form (https://en.wikipedia.org/wiki/Roman_numerals#Description)

    Algorithm & Explanation : https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html
*/

const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
const thousands = ['', 'M', 'MM', 'MMM']

function decimalToRoman (num) {
  return thousands[Math.floor(num / 1000)] +
          hundreds[Math.floor((num % 1000) / 100)] +
         tens[Math.floor((num % 100) / 10)] +
         ones[num % 10]
}

export { decimalToRoman }
