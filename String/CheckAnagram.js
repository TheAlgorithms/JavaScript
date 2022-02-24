// An [Anagram](https://en.wikipedia.org/wiki/Anagram) is a string that is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Anagram check is case sensitive; i.e. Aba and aba is not a anagram.
// inputs are strings i.e. str1 and str2
const checkAnagram = (str1, str2) => {
  // check that inputs are strings.
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return 'Not string(s)'
  }
  
  if (str1.length !== str2.length) {
    return false
  }
  
  // If both strings have not same lengths then they can not be anagrams
  
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  // Use hashmap to keep count of characters in str1

  const str1CharCount = new Map()

  for (let i = 0; i < str1.length; i++) {
    let previousCount = 0
    if (str1CharCount.has(str1[i])) {
      previousCount = str1CharCount.get(str1[i])
    }
    str1CharCount.set(str1[i], previousCount + 1)
  }

  // Now check if second string has same characters?

  for (let i = 0; i < str2.length; i++) {
    let previousCount = 0
    // if str1CharCount has no key for str2[i] then not anagram.
    if (!str1CharCount.has(str2[i])) return false

    previousCount = str1CharCount.get(str2[i])
    str1CharCount.set(str2[i], previousCount - 1)
  }

  for (const key in str1CharCount) {
    if (str1CharCount[key] !== 0) return false
  }

  return true
}

export { checkAnagram }
