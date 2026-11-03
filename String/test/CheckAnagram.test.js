import { checkAnagram } from '../CheckAnagram.js'

describe('checkAnagram', () => {
  test("'listen' and 'silent' are anagrams", () => {
    expect(checkAnagram('listen', 'silent')).toBe(true)
  })

  test("'hello' and 'world' are NOT anagrams", () => {
    expect(checkAnagram('hello', 'world')).toBe(false)
  })

  test("'Astronomer' and 'Moon starer' are anagrams", () => {
    expect(checkAnagram('Astronomer', 'Moon starer')).toBe(true)
  })

  test("'triangle' and 'integral' are anagrams", () => {
    expect(checkAnagram('triangle', 'integral')).toBe(true)
  })

  test('empty strings are anagrams', () => {
    expect(checkAnagram('', '')).toBe(true)
  })

  test('case insensitive check', () => {
    expect(checkAnagram('Listen', 'Silent')).toBe(true)
  })

  test('different lengths are NOT anagrams', () => {
    expect(checkAnagram('abc', 'ab')).toBe(false)
  })

  test("'abc' and 'cba' are anagrams", () => {
    expect(checkAnagram('abc', 'cba')).toBe(true)
  })

  test('throws TypeError for non-string first input', () => {
    expect(() => checkAnagram(123, 'silent')).toThrow(TypeError)
  })

  test('throws TypeError for non-string second input', () => {
    expect(() => checkAnagram('listen', 123)).toThrow(TypeError)
  })
})
