import { countVowels } from '../CountVowels.js'

describe('countVowels', () => {
  test("countVowels('hello') returns 2", () => {
    expect(countVowels('hello')).toBe(2)
  })

  test("countVowels('rhythm') returns 0", () => {
    expect(countVowels('rhythm')).toBe(0)
  })

  test("countVowels('AEIOU') returns 5", () => {
    expect(countVowels('AEIOU')).toBe(5)
  })

  test("countVowels('') returns 0", () => {
    expect(countVowels('')).toBe(0)
  })

  test("countVowels('The quick brown fox') returns 5", () => {
    expect(countVowels('The quick brown fox')).toBe(5)
  })

  test('countVowels ignores non-letter characters', () => {
    expect(countVowels('a1e2i3o4u5')).toBe(5)
  })

  test("countVowels('bcdfg') returns 0", () => {
    expect(countVowels('bcdfg')).toBe(0)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => countVowels(123)).toThrow(TypeError)
  })

  test('throws TypeError for null input', () => {
    expect(() => countVowels(null)).toThrow(TypeError)
  })
})
