// Palindrome check is case sensitive; i.e. Aba is not a palindrome
// input is a string
const checkPalindrome = (str) => {
  // check that input is a string
  if (typeof str !== 'string') {
    return 'Not a string'
  }
  // Store the length of the input string in a variable
  const length = str.length
  if (length === 0) {
    return 'Empty string'
  }
  // Iterate through the length of the string
  // Compare the first character to the last, the second character to the second last, and so on
  for (let i = 0; i < length / 2; i++) {
    // at the first instance of a mismatch
    if (str[i] !== str[length - 1 - i]) {
      return 'Not a Palindrome'
    }
  }
  return 'Palindrome'
}

console.log(checkPalindrome('madam'))
console.log(checkPalindrome('abcd'))
