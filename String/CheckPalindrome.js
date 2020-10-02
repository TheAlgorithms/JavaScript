// Palindrome check is case sensitive; i.e. Aba is not a palindrome
// input is a string
const checkPalindrome = (str) => {
  // check that input is a string
  if (typeof str !== 'string') {
    return 'Not a string'
  }
  // Store the value of the input string in a variable
  const reversedStr = str
  //  check if the string is empty string
  if (str.length === 0) {
    return 'Empty string'
  }
  //  split the reversedStr into array using Array.prototype.split()
  //  reverse the array using Array.prototype.reverse()
  //  then concatenate all the elements of array to make it string again and reversed version of the input string using Array.prototype.join()
  //  then use ternary operation to return whether the string is palindrome or not
  return reversedStr.split('').reverse().join('') === str
    ? 'Palindrome'
    : 'Not a palindrome'
}

console.log(checkPalindrome('madam'))
console.log(checkPalindrome('abcd'))
