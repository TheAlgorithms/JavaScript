import { repeatString } from '../RepeatString.js'

describe('repeatString', () => {
  test("repeatString('abc', 3) returns 'abcabcabc'", () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc')
  })

  test("repeatString('ha', 2) returns 'haha'", () => {
    expect(repeatString('ha', 2)).toBe('haha')
  })

  test("repeatString('abc', 0) returns ''", () => {
    expect(repeatString('abc', 0)).toBe('')
  })

  test("repeatString('abc', 1) returns 'abc'", () => {
    expect(repeatString('abc', 1)).toBe('abc')
  })

  test('repeatString empty string returns empty string', () => {
    expect(repeatString('', 5)).toBe('')
  })

  test('repeatString single char', () => {
    expect(repeatString('a', 5)).toBe('aaaaa')
  })

  test('repeatString with spaces', () => {
    expect(repeatString('ab ', 3)).toBe('ab ab ab ')
  })

  test('throws TypeError for non-string input', () => {
    expect(() => repeatString(123, 3)).toThrow(TypeError)
  })

  test('throws TypeError for negative n', () => {
    expect(() => repeatString('abc', -1)).toThrow(TypeError)
  })

  test('throws TypeError for float n', () => {
    expect(() => repeatString('abc', 1.5)).toThrow(TypeError)
  })
})
