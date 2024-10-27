import { rabinKarp } from '../RabinKarp'

describe('Rabin-Karp Algorithm', () => {
  it('should find occurrences of the pattern in the text', () => {
    const haystack = 'abracadabra'
    const needle = 'abra'
    const result = rabinKarp(haystack, needle)
    expect(result).toEqual([0, 7])
  })

  it('should return an empty array if the pattern is absent', () => {
    const haystack = 'hello world'
    const needle = 'test'
    const result = rabinKarp(haystack, needle)
    expect(result).toEqual([])
  })

  it('should throw RangeError for empty input', () => {
    expect(() => rabinKarp('', 'pattern')).toThrow(RangeError)
    expect(() => rabinKarp('text', '')).toThrow(RangeError)
  })

  it('should return empty for patterns longer than text', () => {
    const haystack = 'short'
    const needle = 'longerpattern'
    const result = rabinKarp(haystack, needle)
    expect(result).toEqual([])
  })

  it('should handle single-character patterns', () => {
    const haystack = 'hello'
    const needle = 'e'
    const result = rabinKarp(haystack, needle)
    expect(result).toEqual([1])
  })
})
