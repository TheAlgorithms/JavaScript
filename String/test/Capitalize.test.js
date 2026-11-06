import { capitalize } from '../Capitalize.js'

describe('capitalize', () => {
  test("capitalize('hello') returns 'Hello'", () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  test("capitalize('hELLO WORLD') returns 'Hello world'", () => {
    expect(capitalize('hELLO WORLD')).toBe('Hello world')
  })

  test("capitalize('') returns ''", () => {
    expect(capitalize('')).toBe('')
  })

  test('capitalize single character', () => {
    expect(capitalize('a')).toBe('A')
  })

  test('capitalize already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello')
  })

  test('capitalize all uppercase string', () => {
    expect(capitalize('HELLO')).toBe('Hello')
  })

  test('capitalize string with numbers', () => {
    expect(capitalize('1hello')).toBe('1hello')
  })

  test('capitalize string starting with space', () => {
    expect(capitalize(' hello')).toBe(' hello')
  })

  test('throws TypeError for non-string input', () => {
    expect(() => capitalize(123)).toThrow(TypeError)
  })

  test('throws TypeError for null input', () => {
    expect(() => capitalize(null)).toThrow(TypeError)
  })
})
