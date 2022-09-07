import { countSubstrings } from '../CountSubstrings'

describe('CountSubstrings', () => {
  it('count multiple occurrences of substring in a string', () => {
    const str = 'This is a string'
    const substring = 'is'
    const count = countSubstrings(str, substring)
    expect(count).toBe(2)
  })

  it('should return 0 when input substring has no occurrences', () => {
    const str = 'Jurassic Park'
    const substring = 'World'
    const count = countSubstrings(str, substring)
    expect(count).toBe(0)
  })

  it('should return 1 when input substring is of length 1 that is equal to string', () => {
    const str = 's'
    const substring = 's'
    const count = countSubstrings(str, substring)
    expect(count).toBe(1)
  })

  it('should return the correct result when input string contains spaces', () => {
    const str = 'ab cd ef  ghi'
    const substring = ' '
    const count = countSubstrings(str, substring)
    expect(count).toBe(4)
  })

  it('should return the correct result when input substring contains number or special characters', () => {
    const str = 'abc1@2def1@2'
    const substring = '1@2'
    const count = countSubstrings(str, substring)
    expect(count).toBe(2)
  })

  it('should return string.length + 1 when the input substring is an empty string', () => {
    const str = 'empty'
    const substring = ''
    const count = countSubstrings(str, substring)
    expect(count).toBe(6)
  })

  it('should return correct result when input is overlapping substring', () => {
    const str = 'aaa'
    const substring = 'aa'
    const count = countSubstrings(str, substring)
    expect(count).toBe(2)
  })
})
