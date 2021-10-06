/*
  Pangram is a sentence that contains all the letters in the alphabet
  https://en.wikipedia.org/wiki/Pangram
 */

const checkPangram = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }

  const frequency = new Set()

  for (const letter of string.toLowerCase()) {
    if (letter >= 'a' && letter <= 'z') {
      frequency.add(letter)
    }
  }

  return frequency.size === 26
}

export { checkPangram }
