
// Check whether the given string is Palindrome or not
export const Palindrome = (str) => {
  if (typeof str !== 'string') {
    str = str.toString()
  }

  if (str === null || str === undefined) {
    return false
  }

  if (str.length === 1 || str.length === 0) {
    return true
  }

  if (str[0] !== str[str.length - 1]) {
    return false
  } else {
    return Palindrome(str.slice(1, str.length - 1))
  }
}
