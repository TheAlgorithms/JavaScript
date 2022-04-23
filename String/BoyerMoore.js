/*
 *
 *
 *Implementation of the Boyer-Moore String Search Algorithm.
 *The Boyer–Moore string search algorithm allows linear time in
 *search by skipping indices when searching inside a string for a pattern.
 *
 *
 *
 *
 **/
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
