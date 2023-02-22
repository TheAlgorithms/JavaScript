/**
* Divide two numbers and get the result of floor division and remainder
* @param {number} dividend
* @param {number} divisor
* @returns {[result: number, remainder: number]}
*/
const floorDiv = (dividend, divisor) => {
  const remainder = dividend % divisor
  const result = Math.floor(dividend / divisor)

  return [result, remainder]
}

/**
* Converts a string from one base to other
* @param {string} stringInBaseOne String in input base
* @param {string} baseOneCharacters Character set for the input base
* @param {string} baseTwoCharacters Character set for the output base
* @returns {string}
*/
const convertArbitraryBase = (stringInBaseOne, baseOneCharacterString, baseTwoCharacterString) => {
  if ([stringInBaseOne, baseOneCharacterString, baseTwoCharacterString].map(arg => typeof arg).some(type => type !== 'string')) {
    throw new TypeError('Only string arguments are allowed')
  }

  const baseOneCharacters = [...baseOneCharacterString]
  const baseTwoCharacters = [...baseTwoCharacterString]

  for (const charactersInBase of [baseOneCharacters, baseTwoCharacters]) {
    if (charactersInBase.length !== new Set(charactersInBase).size) {
      throw new TypeError('Duplicate characters in character set are not allowed')
    }
  }
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
    const [divisionResult, remainder] = floorDiv(value, stringTwoBase)
    stringInBaseTwo = baseTwoCharacters[remainder] + stringInBaseTwo
    value = divisionResult
  }
  return stringInBaseTwo || baseTwoCharacters[0]
}

export { convertArbitraryBase }
