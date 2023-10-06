/*
  Gets the sum of the digits of the numbers inputted
  sumOfDigits(10) will return 1 + 0 = 1
  sumOfDigits(255) will return 2 + 5 + 5 = 12
  Wikipedia: https://en.wikipedia.org/wiki/Digit_sum
*/

/*
  The given input is converted to a string, split into an array of characters.
  This array is reduced to a number using the method <Array>.reduce
*/
function sumOfDigitsUsingString(number) {
  if (number < 0) number = -number

  return +number
    .toString()
    .split('')
    .reduce((a, b) => +a + +b)
}

/*
  The input is divided by 10 in each iteration, till the input is equal to 0
  The sum of all the digits is returned (The res variable acts as a collector, taking the remainders on each iteration)
*/
function sumOfDigitsUsingLoop(number) {
  if (number < 0) number = -number
  let res = 0

  while (number > 0) {
    res += number % 10
    number = Math.floor(number / 10)
  }

  return res
}

/*
  We use the fact that the sum of the digits of a one digit number is itself, and check whether the number is less than 10. If so, then we return the number. Else, we take the number divided by 10 and floored, and recursively call the function, while adding it with the number mod 10
*/
function sumOfDigitsUsingRecursion(number) {
  if (number < 0) number = -number

  if (number < 10) return number

  return (number % 10) + sumOfDigitsUsingRecursion(Math.floor(number / 10))
}

export {
  sumOfDigitsUsingRecursion,
  sumOfDigitsUsingLoop,
  sumOfDigitsUsingString
}
