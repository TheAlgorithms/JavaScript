/**
 * Implementation of the Boyer-Moore String Search Algorithm.
 * The Boyer–Moore string search algorithm allows linear time search by skipping indices
 * when searching inside a string for a pattern.
 */

/**
 * Builds the bad match table for the Boyer-Moore algorithm based on the pattern.
 * @param {string} str The pattern string for which the bad match table is built.
 * @returns {Object} The bad match table object containing characters and their corresponding offsets.
 */
const buildBadMatchTable = (str) => {
  const tableObj = {}
  const strLength = str.length
  for (let i = 0; i < strLength - 1; i++) {
    tableObj[str[i]] = strLength - 1 - i
  }
  if (tableObj[str[strLength - 1]] === undefined) {
    tableObj[str[strLength - 1]] = strLength
  }
  return tableObj
}

/**
 * Performs the Boyer-Moore string search algorithm to find a pattern in a given string.
 * @param {string} str The string in which to search for the pattern.
 * @param {string} pattern The pattern string to search for in the main string.
 * @returns {number} The index at which the pattern is found in the string, or -1 if not found.
 */
const boyerMoore = (str, pattern) => {
  const badMatchTable = buildBadMatchTable(pattern)
  let offset = 0
  const patternLastIndex = pattern.length - 1
  const maxOffset = str.length - pattern.length
  // if the offset is bigger than maxOffset, cannot be found
  while (offset <= maxOffset) {
    let scanIndex = 0
    while (pattern[scanIndex] === str[scanIndex + offset]) {
      if (scanIndex === patternLastIndex) {
        // found at this index
        return offset
      }
      scanIndex++
    }
    const badMatchString = str[offset + patternLastIndex]
    if (badMatchTable[badMatchString]) {
      // increase the offset if it exists
      offset += badMatchTable[badMatchString]
    } else {
      offset++
    }
  }
  return -1
}

export { boyerMoore }
