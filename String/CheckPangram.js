/**
 * Checks if a given sentence is a pangram, optionally perfect pangram.
 * Pangram is a sentence, that contains all letters of alphabet at least once. In case of perfect pangram just once.
 */

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

/**
 * Checks if a given sentence is a pangram
 * @param {string} sentence
 * @param {boolean} [perfect=false]
 */
const isPangram = (sentence, perfect = false) => {
  return alphabet.every((char) => {
    const lowerCaseChar = char.toLowerCase()
    const lowerCaseSentence = sentence.toLowerCase()
    const charIndex = lowerCaseSentence.indexOf(lowerCaseChar)
    if (charIndex === -1) {
      return false
    }
    if (perfect) {
      const sentenceWithoutIndex = lowerCaseSentence.slice(0, charIndex) + lowerCaseSentence.slice(charIndex + 1)
      if (sentenceWithoutIndex.indexOf(lowerCaseChar) !== -1) {
        return false
      }
    }
    return true
  })
}

// testing
console.log(isPangram('The quick brown fox jumps over a lazy dog and something')) // True
console.log(isPangram('The quick brown fox')) // False
console.log(isPangram('The quick brown fox jumps over a lazy dog', true)) // False
console.log(isPangram('Mr Jock, TV quiz PhD, bags few lynx', true)) // True
