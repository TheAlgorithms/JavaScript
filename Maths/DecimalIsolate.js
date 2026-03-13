/*
 * This function isolates the decimal part of a number.
 * - If input is a number or a numeric string, it isolates and returns the decimal part.
 * - If input is an array:
 *    - It isolates the decimal part of the first element.
 *    - If the array contains more than one element, only the first element is considered.
 *    - If the array is empty, it returns 0.
 * - If input is not a number, a numeric string, or a valid first element array,
 *   the function returns 0.
 */

export const decimalIsolate = (number) => {
  const answer = parseFloat((number + '').replace(/^[-\d]+./, '.'))
  return isNaN(answer) === true ? 0 : answer
}
