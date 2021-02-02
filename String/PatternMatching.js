/*
Pattern matching is case insensitive as
the inputs are converted to lower case before the
algorithm is run.

The algorithm will run through the entire text and
return the starting index if the given pattern is
available in the text
*/
const checkIfPatternExists = (text, pattern) => {
  if (typeof text !== 'string' || typeof pattern !== 'string') {
    throw new TypeError('Given input is not a string')
  }
  const textLength = text.length // Store the length of the text in a variable
  const patternLength = pattern.length // Store the length of the pattern in a variable

  // Iterate through the text until the textlength - patternlength index
  for (let i = 0; i <= textLength - patternLength; i++) {
    // For each character in the text check if the subsequent character
    // are matching the given pattern; if not break from the condition
    for (let j = 0; j < textLength; j++) {
      if (text[i + j] !== pattern[j]) break

      // For each iteration of j check if the value of
      // j + 1 is equal to the length of the pattern
      if (j + 1 === patternLength) {
        return `Given pattern is found at index ${i}`
      }
    }
  }
}

export { checkIfPatternExists }
