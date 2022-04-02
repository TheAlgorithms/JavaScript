/*
 * function isolates the decimal part of a number.
 * Take the number and subtract it from the floored number.
 * Return the result.
 */

export const decimalIsolate = (number) => {
  const answer = parseFloat((number + '').replace(/^[-\d]+./, '.'))
  return isNaN(answer) === true ? 0 : answer
}
