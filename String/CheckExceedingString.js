// checks if a string is exceeding string or not
// Exceeding words are words where the gap between two adjacent characters is increasing.
// The gap is the distance in ascii
// More info at : https://github.com/TheAlgorithms/Javascript/issues/765

/**
 * a function to check whether a string is exceedng or not
 * @param str the str that should be checked
 */
function checkExceedingString(str) {
  if (typeof str !== 'string') throw new TypeError('str must be a string!')

  const asciiArr = []

  // collect the ascii of each letter
  for (let s of str) asciiArr.push(s.charCodeAt())

  let isExceeding = true

  for (let j = 0; j < asciiArr.length - 3; j++) {
    // if the ascii of current letter is greater than the next letter it's not an exceeding string
    let gapCond =
      Math.abs(asciiArr[j] - asciiArr[j + 1]) >
      Math.abs(asciiArr[j + 2] - asciiArr[j + 3])
    if (gapCond) {
      isExceeding = false
      break
    }
  }
  return isExceeding
}

module.exports = checkExceedingString
