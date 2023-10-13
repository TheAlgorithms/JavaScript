/**
 * @function generateSubSets
 * @param {Array} inputArray
 * @returns {Array}
 * @example [1,2] -> [[],[1],[2],[1,2]]
 */

// The time complexity of this algorithm is BigO(2^n) where n is the length of array
function generateSubSets(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw new Error('Provided input is not an array')
  }
  if (inputArray.length > 32) {
    throw new RangeError('Error size should be less than equal to 32')
  }
  let arrayLength = inputArray.length
  let subSets = []
  // loop till (2^n) - 1
  for (let i = 0; i < 1 << arrayLength; i++) {
    let subSet = []
    for (let j = 0; j < arrayLength; j++) {
      // 1 << j it shifts binary digit 1 by j positions and then we perform
      // and by AND operation we are checking whetheer jth bit
      // in i is set to 1 if result is non zero just add into set
      if (i & (1 << j)) {
        subSet.push(inputArray[j])
      }
    }
    subSets.push(subSet)
  }
  return subSets
}

export { generateSubSets }
