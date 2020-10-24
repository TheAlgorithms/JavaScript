/*
 * function isolates the decimal part of a number.
 * Take the number and subtract it from the floored number.
 * Return the result.
 */

const decimalIsolate = (number) => {
  return number - Math.floor(number)
}

// testing
console.log(decimalIsolate(35.345))
console.log(decimalIsolate(56.879))
console.log(decimalIsolate(89.5643))
