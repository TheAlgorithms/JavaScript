const numberToWordLength = (n) => {
  let inWord = ''

  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (n < 20) {
    return ones[n]
  }

  if (n >= 20 && n < 100) {
    const unit = n % 10
    return tens[n / 10 - 2 | 0] + ((unit !== 0) ? ones[unit] : '')
  }

  const hundred = Math.floor(n / 100) % 10
  const thousand = Math.floor(n / 1000)
  const sub = n % 100

  if (n > 999) {
    inWord += numberToWordLength(thousand) + 'thousand'
  }

  if (hundred !== 0) {
    inWord += ones[hundred] + 'hundred'
  }

  if (sub !== 0) {
    inWord += 'and' + numberToWordLength(sub)
  }

  return inWord
}

const countNumberWordLength = (number) => {
  let count = 0

  if (Number.isNaN(parseInt(number))) {
    throw new Error('Invalid input, please provide valid number')
  }

  if (number < 1) {
    throw new Error('Please provide number greater that 1')
  }

  for (let i = 1; i <= number; i++) {
    count += numberToWordLength(i).length
  }

  return count
}

export { countNumberWordLength }
