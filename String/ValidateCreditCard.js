/**
 * Validate a given credit card number
 */

const validStartSubString = ['4', '5', '6', '37', '34', '35']

const luhnValidation = (creditCardNumber) => {
  let validationSum = 0
  creditCardNumber.split('').forEach((digit, index) => {
    let currentDigit = parseInt(digit)
    if (index % 2 === 0) {
      currentDigit *= 2
      if (currentDigit > 9) {
        currentDigit %= 10
        currentDigit += 1
      }
    }
    validationSum += currentDigit
  })

  return validationSum % 10 === 0
}

const validateCreditCard = (creditCardString) => {
  if (typeof creditCardString !== 'string') {
    throw new TypeError('The given value is not a string')
  }

  const errorMessage = `${creditCardString} is an invalid credit card number because `
  if (isNaN(creditCardString)) {
    throw new TypeError(errorMessage + 'it has nonnumerical characters.')
  }
  const creditCardStringLength = creditCardString.length
  if (!((creditCardStringLength >= 13) && (creditCardStringLength <= 16))) {
    throw new Error(errorMessage + 'of its length.')
  }
  if (!validStartSubString.some(subString => creditCardString.startsWith(subString))) {
    throw new Error(errorMessage + 'of its first two digits.')
  }
  if (!luhnValidation(creditCardString)) {
    throw new Error(errorMessage + 'it fails the Luhn check.')
  }

  return true
}

export { validateCreditCard }
