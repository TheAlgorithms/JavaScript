/**
 * @function isPalindromeIntegerNumber
 * @param { Number } x
 * @returns {boolean} - input integer is palindrome or not
 *
 * time complexity : O(log_10(N))
 * space complexity : O(1)
 */
export function isPalindromeIntegerNumber(x) {
  if (typeof x !== 'number') {
    throw new TypeError('Input must be a integer number')
  }
  // check x is integer
  if (!Number.isInteger(x)) {
    return false
  }

  // if it has '-' it cannot be palindrome
  if (x < 0) return false

  // make x reverse
  let reversed = 0
  let num = x

  while (num > 0) {
    const lastDigit = num % 10
    reversed = reversed * 10 + lastDigit
    num = Math.floor(num / 10)
  }

  // compare origin x and reversed are same
  return x === reversed
}
