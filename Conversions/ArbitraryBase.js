/**
* Converts a string from one base to other
* @param {string} stringInBaseOne String in input base
* @param {string} baseOneCharacters Character set for the input base
* @param {string} baseTwoCharacters Character set for the output base
* @returns {string}
*/
const convertArbitraryBase = (stringInBaseOne, baseOneCharacters, baseTwoCharacters) => {
  if ([stringInBaseOne, baseOneCharacters, baseTwoCharacters].map(arg => typeof arg).some(type => type !== 'string')) {
    throw new TypeError('Only string arguments are allowed')
  }
  [baseOneCharacters, baseTwoCharacters].forEach(baseString => {
    const charactersInBase = [...baseString]
    if (charactersInBase.length !== new Set(charactersInBase).size) {
      throw new TypeError('Duplicate characters in character set are not allowed')
    }
  })
  const reversedStringOneChars = [...stringInBaseOne].reverse()
  const stringOneBase = baseOneCharacters.length
  let value = 0
  let placeValue = 1
  for (const digit of reversedStringOneChars) {
    const digitNumber = baseOneCharacters.indexOf(digit)
    if (digitNumber === -1) {
      throw new TypeError(`Not a valid character: ${digit}`)
    }
    value += (digitNumber * placeValue)
    placeValue *= stringOneBase
  }
  let stringInBaseTwo = ''
  const stringTwoBase = baseTwoCharacters.length
  while (value > 0) {
    const remainder = value % stringTwoBase
    stringInBaseTwo = baseTwoCharacters.charAt(remainder) + stringInBaseTwo
    value /= stringTwoBase
  }
  const baseTwoZero = baseTwoCharacters.charAt(0)
  return stringInBaseTwo.replace(new RegExp(`^${baseTwoZero}+`), '')
}

(() => {
  console.log(convertArbitraryBase('98', '0123456789', '01234567'))
  console.log(convertArbitraryBase('98', '0123456789', 'abcdefgh'))
  console.log(convertArbitraryBase('129', '0123456789', '01234567'))
})()
