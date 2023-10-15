import { abbreviation } from '../Abbreviation.js'

describe('Abbreviation', () => {
  test('it can abbreviate string a to b', () => {
    expect(abbreviation('', '')).toBe(true)
    expect(abbreviation('a', '')).toBe(true)
    expect(abbreviation('', 'A')).toBe(false)
    expect(abbreviation('a', 'A')).toBe(true)
    expect(abbreviation('abcDE', 'ABCDE')).toBe(true)
    expect(abbreviation('ABcDE', 'ABCDE')).toBe(true)
    expect(abbreviation('abcde', 'ABCDE')).toBe(true)
    expect(abbreviation('abcde', 'ABC')).toBe(true)
    expect(abbreviation('a', 'ABC')).toBe(false)
    expect(abbreviation('abcXYdefghijKLmnopqrs', 'XYKL')).toBe(true)
    expect(abbreviation('aBcXYdefghijKLmnOpqrs', 'XYKLOP')).toBe(false)
    expect(abbreviation('abc123', 'ABC')).toBe(true)
    expect(abbreviation('abc123', 'ABC123')).toBe(true)
    expect(abbreviation('abc!@#def', 'ABC')).toBe(true)
  })
})