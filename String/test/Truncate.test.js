import { truncate } from '../Truncate.js'

describe('truncate', () => {
  test("truncate('Hello World', 5) returns 'Hello...'", () => {
    expect(truncate('Hello World', 5)).toBe('Hello...')
  })

  test("truncate('Hi', 5) returns 'Hi'", () => {
    expect(truncate('Hi', 5)).toBe('Hi')
  })

  test('truncate at exact length returns original', () => {
    expect(truncate('Hello', 5)).toBe('Hello')
  })

  test("truncate('Hello World', 11) returns 'Hello World'", () => {
    expect(truncate('Hello World', 11)).toBe('Hello World')
  })

  test('truncate empty string returns empty string', () => {
    expect(truncate('', 5)).toBe('')
  })

  test('truncate with maxLength 1', () => {
    expect(truncate('Hello', 1)).toBe('H...')
  })

  test('truncate long string', () => {
    expect(truncate('The quick brown fox', 9)).toBe('The quick...')
  })

  test('throws TypeError for non-string input', () => {
    expect(() => truncate(123, 5)).toThrow(TypeError)
  })

  test('throws TypeError for zero maxLength', () => {
    expect(() => truncate('Hello', 0)).toThrow(TypeError)
  })

  test('throws TypeError for negative maxLength', () => {
    expect(() => truncate('Hello', -1)).toThrow(TypeError)
  })

  test('throws TypeError for float maxLength', () => {
    expect(() => truncate('Hello', 2.5)).toThrow(TypeError)
  })
})
