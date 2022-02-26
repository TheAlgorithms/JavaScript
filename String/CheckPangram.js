/*
  Pangram is a sentence that contains all the letters in the alphabet
  https://en.wikipedia.org/wiki/Pangram
 */

const checkPangram = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }

  return string.match(/([a-z])(?!.*\1)/gi).length === 26
}

export { checkPangram }
