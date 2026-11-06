import { isPangram } from '../IsPangram.js'

describe('isPangram', () => {
  test("'The quick brown fox jumps over the lazy dog' is a pangram", () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog')).toBe(true)
  })

  test("'Hello World' is NOT a pangram", () => {
    expect(isPangram('Hello World')).toBe(false)
  })

  test('empty string is NOT a pangram', () => {
    expect(isPangram('')).toBe(false)
  })

  test('case insensitive check', () => {
    expect(isPangram('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toBe(true)
  })

  test('string with numbers and symbols but all letters is a pangram', () => {
    expect(isPangram('1 The quick brown fox jumps over the lazy dog 2!')).toBe(
      true
    )
  })

  test('string missing one letter is NOT a pangram', () => {
    expect(isPangram('The quick brown fox jumps over the lazy cat')).toBe(false)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => isPangram(123)).toThrow(TypeError)
  })

  test('throws TypeError for null input', () => {
    expect(() => isPangram(null)).toThrow(TypeError)
  })
})
