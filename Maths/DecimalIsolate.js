/*
 * function isolates the decimal part of a number.
 * Take the number and subtract it from the floored number.
 * Return the result.
 */

const decimalIsolate = (number) => {
  const ans = parseFloat((number + '').replace(/^[-\d]+./, '.'))
  return isNaN(ans) === true ? 0 : ans
}

const decimalIsolateByFloor = (number) => {
  return number - Math.floor(number)
}

// testing
[decimalIsolate, decimalIsolateByFloor].forEach(func => {
  console.log(func(35.345))
  console.log(func(56.879))
  console.log(func(89.5643))
  console.log(func(38.00))
  console.log(func(33))
})