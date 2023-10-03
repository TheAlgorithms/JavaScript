/**
 * Validate a given credit card number
 *
 * The core of the validation of credit card numbers is the Luhn algorithm.
 *
 * The validation sum should be completely divisible by 10 which is calculated as follows,
 * every first digit is added directly to the validation sum.
 * For every second digit in the credit card number, the digit is multiplied by 2.
 * If the product is greater than 10 the digits of the product are added.
 * This resultant digit is considered for the validation sum rather than the digit itself.
 *
 * Ref: https://www.geeksforgeeks.org/luhn-algorithm/
 */

const luhnValidation = (creditCardNumber) => {
  let validationSum = 0
  creditCardNumber.split('').forEach((digit, index) => {
    let currentDigit = parseInt(digit)
    if (index % 2 === 0) {
      // Multiply every 2nd digit from the left by 2
      currentDigit *= 2
      // if product is greater than 10 add the individual digits of the product to get a single digit
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
  const validStartSubString = ['4', '5', '6', '37', '34', '35'] // Valid credit card numbers start with these numbers

  if (typeof creditCardString !== 'string') {
    throw new TypeError('The given value is not a string')
  }

  const errorMessage = `${creditCardString} is an invalid credit card number because `
  if (isNaN(creditCardString)) {
    throw new TypeError(errorMessage + 'it has nonnumerical characters.')
  }
  const creditCardStringLength = creditCardString.length
  if (!(creditCardStringLength >= 13 && creditCardStringLength <= 16)) {
    throw new Error(errorMessage + 'of its length.')
  }
  if (
    !validStartSubString.some((subString) =>
      creditCardString.startsWith(subString)
    )
  ) {
    throw new Error(errorMessage + 'of its first two digits.')
  }
  if (!luhnValidation(creditCardString)) {
    throw new Error(errorMessage + 'it fails the Luhn check.')
  }

  return true
}

export { validateCreditCard }
