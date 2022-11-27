/*
  'In number theory, friendly numbers are two or more natural numbers with a common abundancy index, the
  ratio between the sum of divisors of a number and the number itself.'
  Source: https://en.wikipedia.org/wiki/Friendly_number
  See also: https://mathworld.wolfram.com/FriendlyNumber.html#:~:text=The%20numbers%20known%20to%20be,numbers%20have%20a%20positive%20density.
*/

export const FriendlyNumbers = (firstNumber, secondNumber) => {
  // input: two integers
  // output: true if the two integers are friendly numbers, false if they are not friendly numbers

  // First, check that the parameters are valid
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) || firstNumber === 0 || secondNumber === 0 || firstNumber === secondNumber) {
    throw new Error('The two parameters must be distinct, non-null integers')
  }

  // Calculate the abundancy index of the two number.
  // ... first get the sum of their divisors
  let sumDivisorsFirstNumber = firstNumber
  let sumDivisorsSecondNumber = secondNumber

  for (let i = 0; i < firstNumber / 2; i++) {
    if (Number.isInteger(firstNumber / i)) {
      sumDivisorsFirstNumber += i
    }
  }
  for (let i = 0; i < secondNumber / 2; i++) {
    if (Number.isInteger(secondNumber / i)) {
      sumDivisorsSecondNumber += i
    }
  }
  // ... and divide that sum by the number itself
  const abundancyIndexFirstNumber = sumDivisorsFirstNumber / firstNumber
  const abundancyIndexSecondNumber = sumDivisorsSecondNumber / secondNumber

  if (abundancyIndexFirstNumber === abundancyIndexSecondNumber) {
    return true
  } else {
    return false
  }
}
