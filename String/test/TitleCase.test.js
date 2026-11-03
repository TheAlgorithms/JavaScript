import { titleCase } from '../TitleCase.js'

describe('titleCase', () => {
  test("titleCase('hello world') returns 'Hello World'", () => {
    expect(titleCase('hello world')).toBe('Hello World')
  })

  test("titleCase('the quick brown fox') returns 'The Quick Brown Fox'", () => {
    expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox')
  })

  test("titleCase('HELLO WORLD') returns 'Hello World'", () => {
    expect(titleCase('HELLO WORLD')).toBe('Hello World')
  })

  test("titleCase('') returns ''", () => {
    expect(titleCase('')).toBe('')
  })

  test('titleCase single word', () => {
    expect(titleCase('javascript')).toBe('Javascript')
  })

  test('titleCase handles multiple spaces', () => {
    expect(titleCase('hello  world')).toBe('Hello  World')
  })

  test('titleCase handles mixed case', () => {
    expect(titleCase('hElLo WoRlD')).toBe('Hello World')
  })

  test('throws TypeError for non-string input', () => {
    expect(() => titleCase(123)).toThrow(TypeError)
  })

  test('throws TypeError for null', () => {
    expect(() => titleCase(null)).toThrow(TypeError)
  })
})
