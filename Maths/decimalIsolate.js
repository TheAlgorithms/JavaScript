/*
 * function isolates the decimal part of a number.
 * Take the number and subtract it from the floored number.
 * Return the result.
 */

export const decimalIsolate = (number) => {
  const ans = parseFloat((number + '').replace(/^[-\d]+./, '.'))
  return isNaN(ans) === true ? 0 : ans
}
