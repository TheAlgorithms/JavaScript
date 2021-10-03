import { checkVowels } from '../CheckVowels'

describe('Test the checkVowels function', () => {
  it('expect throws on use wrong param', () => {
    expect(() => checkVowels(0)).toThrow()
  })

  it('count the vowels in a string', () => {
    const value = 'Mad World'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(2)
  })

  it('should return 0 when input is a string with no vowels', () => {
    const value = 'bcdfgh'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(0)
  })

  it('should return 1 when input is a string of length 1 that is a vowel', () => {
    const value = 'a'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(1)
  })

  it('should return the correct result when input is in all uppercase letters', () => {
    const value = 'ABCDE'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(2)
  })

  it('should return the correct result when input is in all lowercase letters', () => {
    const value = 'abcdefghi'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(3)
  })

  it('should return the correct result when input string contains spaces', () => {
    const value = 'abc def   ghi'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(3)
  })

  it('should return the correct result when input contains number characters', () => {
    const value = 'a1b2c3'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(1)
  })

  it('should return the correct result when input contains punctuation characters', () => {
    const value = 'a!b.ce)'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(2)
  })

  it('should return 0 when the input is an empty string', () => {
    const value = ''
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(0)
  })

  it('should count multiple occurances of the same vowel in the input', () => {
    const value = 'aaaaa'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(5)
  })
})
