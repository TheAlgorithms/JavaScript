/**
 * A short example showing how to reverse a string.
 */
function ReverseStringIterative(string) {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }
  let reversedString = ''
  let index

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index]
  }

  return reversedString
}

/**
 *
 * @author dev-madhurendra
 * Reverses a number by converting it to a string.
 *
 * @param {string} str - The number to reverse.
 * @returns {string} The reversed number.
 *
 * @example
 * const reversed = reverseString("hello"); // Returns olleh
 */

const ReverseStringIterativeInplace = (str) => [...str].reverse().join('')

export { ReverseStringIterative, ReverseStringIterativeInplace }
