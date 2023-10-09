/**
 * @author Byte
 * @function currencyFormatting
 * @description Formatting the input number to currency format using Intl.NumberFormat method.
 * @param {Number} num
 * @detail Intl.NumberFormat constructor creates a Intl.NumberFormat object that enable language-sensitive number formatting.
 */

export const currencyFormatting = (num) => {
  const formatter = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EURO'
  })

  return formatter.format(num)
}

// let formattedNumber = currencyFormatting(144503) output: €144,503.00
