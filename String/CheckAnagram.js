// An [Anagram](https://en.wikipedia.org/wiki/Anagram) is a string that is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Anagram check is case sensitive; i.e. Aba and aba is not a anagram.
// inputs are strings i.e. str1 and str2
const checkAnagram = (str1, str2) => {
  // check that inputs are strings.
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return 'Not string(s)'
  }

  // If both strings have not same lengths then they can not be anagram.
  if (str1.length !== str2.length) {
    return false
  }

  return ![...str1].reduce(
    (str2Acc, cur) => str2Acc.replace(cur, ''), // remove the similar letter from str2Acc
    str2
  )
}

export { checkAnagram }
