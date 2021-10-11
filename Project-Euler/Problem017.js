/* 
https://projecteuler.net/problem=17

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const numberToCharMap = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'onethousand'
}

const getOnes = (n) => Math.floor(n % 10)
const getTens = (n) => Math.floor((n / 10) % 10)
const getHundreds = (n) => Math.floor((n / 100) % 10)

const countNumberLetter = (n) => {
  let numberLetter = ''

  for (let i = 1; i <= n; i++) {
    const ones = getOnes(i)
    const tens = getTens(i)
    const hundreds = getHundreds(i)

    if (i <= 20 || (i < 100 && ones === 0) || i === 1000)
      numberLetter += numberToCharMap[i]
    else if (i < 100)
      numberLetter += numberToCharMap[tens * 10] + numberToCharMap[ones]
    else if (i < 1000) {
      if (ones !== 0 || tens !== 0) numberLetter += 'and'
      const tensPlusOnes = tens * 10 + ones
      numberLetter +=
        tensPlusOnes < 20
          ? numberToCharMap[hundreds] +
            numberToCharMap[100] +
            numberToCharMap[tensPlusOnes]
          : numberToCharMap[hundreds] +
            numberToCharMap[100] +
            numberToCharMap[tens * 10] +
            numberToCharMap[ones]
    }
  }

  return numberLetter.length
}

export { countNumberLetter }
