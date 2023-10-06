/**
 * @function checkMirrorString
 * @description Given a string check whether string is symmetric or not or (reflection in a mirror)
 * @param {String} inputString
 * @returns {String}
 * @example AAMMAA -> Is a mirror string
 * @example PAAAP -> Not a mirror string
 */

// time complexity of this algorithm is BigO(N/2) where N is length of string
const checkMirrorString = (inputString) => {
  if (typeof inputString !== 'string') {
    return 'Not a string'
  }
  if (!/^[a-zA-Z]+$/.test(inputString)) {
    return 'String should only contains alphabet'
  }
  if (inputString.length === 0) {
    return 'Input string should not be empty'
  }
  const lowerCaseSymmetricCharacters = new Set(['o', 'i', 'l', 'w', 'v', 'x'])
  const upperCaseSymmetricCharacters = new Set([
    'A',
    'H',
    'I',
    'M',
    'O',
    'T',
    'U',
    'V',
    'W',
    'X'
  ])
  let i = 0
  let j = inputString.length - 1
  let leftPointerCharacter
  let rightPointerCharacter
  while (i <= j) {
    leftPointerCharacter = inputString.at(i)
    rightPointerCharacter = inputString.at(j)
    if (
      (leftPointerCharacter === rightPointerCharacter &&
        lowerCaseSymmetricCharacters.has(leftPointerCharacter)) ||
      upperCaseSymmetricCharacters.has(rightPointerCharacter)
    ) {
      i++
      j--
    } else {
      return 'Not a mirror string'
    }
  }
  return 'Is a mirror string'
}
export { checkMirrorString }
