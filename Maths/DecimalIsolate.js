/*
 * function isolates the decimal part of a number.
 * Take the number and subtract it from the floored number.
 * Return the result.
 */

const decimalIsolate = (number) => {
  const ans = parseFloat((number + '').replace(/^[-\d]+./, '.'))
  return isNaN(ans) === true ? 0 : ans
}

// testing
console.log(decimalIsolate(35.345))
console.log(decimalIsolate(56.879))
console.log(decimalIsolate(89.5643))
console.log(decimalIsolate(38.00))
console.log(decimalIsolate(33))
