// Wikipedia: https://en.wikipedia.org/wiki/Palindrome

function isPalindrome (string) {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - i - 1]) return false
  }
  return true
}

function main () {
  // Result: true
  console.log(isPalindrome('racecar'))
  console.log(isPalindrome('wow'))
  console.log(isPalindrome('delia saw i was ailed'))

  // Result: false
  console.log(isPalindrome('Hello'))
  console.log(isPalindrome('Test'))
}

main()
