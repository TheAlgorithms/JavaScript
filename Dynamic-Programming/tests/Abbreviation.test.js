import { isAbbreviation } from '../Abbreviation.js'

const expectPositive = (word, abbr) =>
  expect(isAbbreviation(word, abbr)).toBe(true)
const expectNegative = (word, abbr) =>
  expect(isAbbreviation(word, abbr)).toBe(false)

describe('Abbreviation - Positive Tests', () => {
  test('it should correctly abbreviate or transform the source string to match the target string', () => {
    expectPositive('', '')
    expectPositive('a', '')
    expectPositive('a', 'A')
    expectPositive('abcDE', 'ABCDE')
    expectPositive('ABcDE', 'ABCDE')
    expectPositive('abcde', 'ABCDE')
    expectPositive('abcde', 'ABC')
    expectPositive('abcXYdefghijKLmnopqrs', 'XYKL')
    expectPositive('abc123', 'ABC')
    expectPositive('abc123', 'ABC123')
    expectPositive('abc!@#def', 'ABC')
  })
})

describe('Abbreviation - Negative Tests', () => {
  test('it should fail to abbreviate or transform the source string when it is not possible to match the target string', () => {
    expectNegative('', 'A')
    expectNegative('a', 'ABC')
    expectNegative('aBcXYdefghijKLmnOpqrs', 'XYKLOP')
  })
})
