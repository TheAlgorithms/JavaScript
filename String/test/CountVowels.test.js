import { countVowels } from '../CountVowels'

describe('CountVowels', () => {
  it('expect throws on use wrong param', () => {
    expect(() => countVowels(0)).toThrow()
  })

  it('count the vowels in a string', () => {
    const value = 'Mad World'
    const count = countVowels(value)
    expect(count).toBe(2)
  })

  it('should return 0 when input is a string with no vowels', () => {
    const value = 'bcdfgh'
    const count = countVowels(value)
    expect(count).toBe(0)
  })

  it('should return 1 when input is a string of length 1 that is a vowel', () => {
    const value = 'a'
    const count = countVowels(value)
    expect(count).toBe(1)
  })

  it('should return the correct result when input is in all uppercase letters', () => {
    const value = 'ABCDE'
    const count = countVowels(value)
    expect(count).toBe(2)
  })

  it('should return the correct result when input is in all lowercase letters', () => {
    const value = 'abcdefghi'
    const count = countVowels(value)
    expect(count).toBe(3)
  })

  it('should return the correct result when input string contains spaces', () => {
    const value = 'abc def   ghi'
    const count = countVowels(value)
    expect(count).toBe(3)
  })

  it('should return the correct result when input contains number characters', () => {
    const value = 'a1b2c3'
    const count = countVowels(value)
    expect(count).toBe(1)
  })

  it('should return the correct result when input contains punctuation characters', () => {
    const value = 'a!b.ce)'
    const count = countVowels(value)
    expect(count).toBe(2)
  })

  it('should return 0 when the input is an empty string', () => {
    const value = ''
    const count = countVowels(value)
    expect(count).toBe(0)
  })

  it('should count multiple occurrences of the same vowel in the input', () => {
    const value = 'aaaaa'
    const count = countVowels(value)
    expect(count).toBe(5)
  })
})
