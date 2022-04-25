/*
*Implementation of the Knuth-Morris-Pratt String Search Algorithm.
*.
*.
*The KMP string search algorithm utilizes the observation that the occurrence of a mismatch contains sufficient information about where the next match could begin.
This skips re-examination of previously matched characters.
A prefix array has to be built to indicate how many indices it has to backtrack to get the same prefix.
KMP search iterates through the string and the pattern to be searched for index by index.
The prefix table compute a new index to try whenever there is a mismatch.
When the pattern’s index reaches the length of the pattern, the string is found. 
*/

const longestPrefix = (str) => {
  //A prefix array is created
  const prefix = new Array(str.length)
  let maxPrefix = 0
  // prefix begins at 0
  prefix[0] = 0
  for (var i = 1; i < str.length; i++) {
    // decrement the prefix value as long as there are mismatches
    while (str.charAt(i) !== str.charAt(maxPrefix) && maxPrefix > 0) {
      maxPrefix = prefix[maxPrefix - 1]
    }
    // update on strings-match
    if (str.charAt(maxPrefix) === str.charAt(i)) {
      maxPrefix++
    }
    // set prefix
    prefix[i] = maxPrefix
  }
  return prefix
}

const KMP = (str, pattern)=>{
  // create the prefix table
  const prefixTable = longestPrefix(pattern)
  let patternIndex = 0
  let strIndex = 0
  while (strIndex < str.length) {
    if (str.charAt(strIndex) !== pattern.charAt(patternIndex)) {
      // Case 1: different characters 
      if (patternIndex !== 0) {
        // use the prefix table if possible
        patternIndex = prefixTable[patternIndex - 1]
      } else {
        // increment the str index to next character
        strIndex++
      }
    } else if (str.charAt(strIndex) === pattern.charAt(patternIndex)) {
      // Case 2: same characters are same
      strIndex++
      patternIndex++
    }
    // found the pattern
    if (patternIndex == pattern.length) {
      return true
    }
  }
  return false
}

export { KMP }
