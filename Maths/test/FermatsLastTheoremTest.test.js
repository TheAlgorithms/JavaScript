import checkFermatLastTheorem from '../FermatsLastTheoremTest.js'

describe("Fermat's Last Theorem Checker (BigInt version)", () => {
  test('throws an error if exponent is less than 3', () => {
    expect(() => checkFermatLastTheorem(10, 2)).toThrow(
      "Fermat's Last Theorem only applies for n >= 3"
    )
    expect(() => checkFermatLastTheorem(10, 1)).toThrow()
  })

  test('small range test: returns empty array for n = 3, max 20', () => {
    const results = checkFermatLastTheorem(20, 3)
    expect(results).toEqual([])
  })

  test('moderate range test: returns empty array for n = 3, max 1000', () => {
    const results = checkFermatLastTheorem(1000, 3)
    expect(results).toEqual([])
  })

  test('small range test: returns empty array for n = 4, max 20', () => {
    const results = checkFermatLastTheorem(20, 4)
    expect(results).toEqual([])
  })

  test('moderate range test: returns empty array for n = 4, max 500', () => {
    const results = checkFermatLastTheorem(500, 4)
    expect(results).toEqual([])
  })
})
