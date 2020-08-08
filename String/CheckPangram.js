// Pangram is a uniques sentence that contains every letter of the alphabet
// The alphabet has to appear at least once
// Pangram Check is case sensitve
function checkPangram (sentence) {
  // Create an array of 26 characters
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'

  // Check if all 26 alphabets characters exists in the sentence
  for (let i = 0; i < alphabets.length; i++) {
    if (sentence.indexOf(alphabets[i]) === -1) {
      return 'This sentence is not a pangram'
    }
  }
  return 'This sentence is a pangram'
}
console.log(checkPangram('The quick brown fox jumps over the lazy dog'))
console.log(checkPangram('The quick red fox jumps over the lazy dog'))
