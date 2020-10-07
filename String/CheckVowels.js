/*
  Given a string of words or phrases, count the number of vowels.
  Example: input = "hello world" return 3
 */

const checkVowels = (value) => {
  if (typeof value !== 'string') {
    throw new TypeError('The first param should be a string')
  }
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let countVowels = 0
  for (let i = 0; i < value.length; i++) {
    const char = value[i].toLowerCase()
    if (vowels.includes(char)) {
      countVowels++
    }
  }
  return countVowels
}

export { checkVowels }
