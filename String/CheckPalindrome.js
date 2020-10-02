// Palindrome check is case sensitive; i.e. Aba is not a palindrome
// input is a string
const checkPalindrome = (str) => {
  // check that input is a string
  if (typeof str !== 'string') {
    return 'Not a string'
  }
   //declare new variable and assign its value to str
  let strCopied = str
  //use .split to split the text into array, then use .reverese to reverse the array and lastly concatenate all of the elements of array using .join to have a reverse value of the word
  //then use ternary operator to differinciate those two words
  return strCopied.split("").reverse().join("") === str ? 'Palindrome' : 'Not a Palindrome';
}

console.log(checkPalindrome('madam'))
console.log(checkPalindrome('abcd'))
