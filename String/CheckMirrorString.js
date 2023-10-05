const checkMirrorString = (inputString) => {
  if (typeof inputString === 'string') {
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
  let i = 0,
    j = inputString.length - 1
  while (i <= j) {
    let leftPointerCharacter = inputString.at(i),
      rightPointerCharacter = inputString.at(j)
    if (
      (leftPointer === inputString.at(j) &&
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
