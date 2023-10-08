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
 * Converts a string from one base to other. Loses accuracy above the value of `Number.MAX_SAFE_INTEGER`.
 * @param {string} stringInBaseOne String in input base
 * @param {string} baseOneCharacters Character set for the input base
 * @param {string} baseTwoCharacters Character set for the output base
 * @returns {string}
 */
const convertArbitraryBase = (
  stringInBaseOne,
  baseOneCharacterString,
  baseTwoCharacterString
) => {
  if (
    [stringInBaseOne, baseOneCharacterString, baseTwoCharacterString]
      .map((arg) => typeof arg)
      .some((type) => type !== 'string')
  ) {
    throw new TypeError('Only string arguments are allowed')
  }

  const baseOneCharacters = [...baseOneCharacterString]
  const baseTwoCharacters = [...baseTwoCharacterString]

  for (const charactersInBase of [baseOneCharacters, baseTwoCharacters]) {
    if (charactersInBase.length !== new Set(charactersInBase).size) {
      throw new TypeError(
        'Duplicate characters in character set are not allowed'
      )
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
    value += digitNumber * placeValue
    placeValue *= stringOneBase
  }
  const outputChars = []
  const stringTwoBase = baseTwoCharacters.length
  while (value > 0) {
    const [divisionResult, remainder] = floorDiv(value, stringTwoBase)
    outputChars.push(baseTwoCharacters[remainder])
    value = divisionResult
  }
  return outputChars.reverse().join('') || baseTwoCharacters[0]
}

/**
 * Converts a arbitrary-length string from one base to other. Doesn't lose accuracy.
 * @param {string} stringInBaseOne String in input base
 * @param {string} baseOneCharacters Character set for the input base
 * @param {string} baseTwoCharacters Character set for the output base
 * @returns {string}
 */
const convertArbitraryBaseBigIntVersion = (
  stringInBaseOne,
  baseOneCharacterString,
  baseTwoCharacterString
) => {
  if (
    [stringInBaseOne, baseOneCharacterString, baseTwoCharacterString]
      .map((arg) => typeof arg)
      .some((type) => type !== 'string')
  ) {
    throw new TypeError('Only string arguments are allowed')
  }

  const baseOneCharacters = [...baseOneCharacterString]
  const baseTwoCharacters = [...baseTwoCharacterString]

  for (const charactersInBase of [baseOneCharacters, baseTwoCharacters]) {
    if (charactersInBase.length !== new Set(charactersInBase).size) {
      throw new TypeError(
        'Duplicate characters in character set are not allowed'
      )
    }
  }
  const reversedStringOneChars = [...stringInBaseOne].reverse()
  const stringOneBase = BigInt(baseOneCharacters.length)
  let value = 0n
  let placeValue = 1n
  for (const digit of reversedStringOneChars) {
    const digitNumber = BigInt(baseOneCharacters.indexOf(digit))
    if (digitNumber === -1n) {
      throw new TypeError(`Not a valid character: ${digit}`)
    }
    value += digitNumber * placeValue
    placeValue *= stringOneBase
  }
  const outputChars = []
  const stringTwoBase = BigInt(baseTwoCharacters.length)
  while (value > 0n) {
    const divisionResult = value / stringTwoBase
    const remainder = value % stringTwoBase
    outputChars.push(baseTwoCharacters[remainder])
    value = divisionResult
  }
  return outputChars.reverse().join('') || baseTwoCharacters[0]
}

export { convertArbitraryBase, convertArbitraryBaseBigIntVersion }
