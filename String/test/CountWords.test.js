import { countWords } from '../CountWords.js'

describe('countWords', () => {
  test("countWords('Hello World') returns 2", () => {
    expect(countWords('Hello World')).toBe(2)
  })

  test("countWords('') returns 0", () => {
    expect(countWords('')).toBe(0)
  })

  test("countWords('  Hello   World  ') returns 2", () => {
    expect(countWords('  Hello   World  ')).toBe(2)
  })

  test('countWords single word returns 1', () => {
    expect(countWords('JavaScript')).toBe(1)
  })

  test("countWords('The quick brown fox') returns 4", () => {
    expect(countWords('The quick brown fox')).toBe(4)
  })

  test('countWords with tabs and newlines', () => {
    expect(countWords('hello\tworld\nfoo')).toBe(3)
  })

  test('countWords with only spaces returns 0', () => {
    expect(countWords('     ')).toBe(0)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => countWords(123)).toThrow(TypeError)
  })

  test('throws TypeError for null input', () => {
    expect(() => countWords(null)).toThrow(TypeError)
  })
})
