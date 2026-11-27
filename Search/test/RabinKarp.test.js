import { rabinKarpSearch } from '../RabinKarp'

describe('Rabin-Karp Search', function () {
  it('should find the pattern in the text', function () {
    const text = 'ABABDABACDABABCABAB'
    const pattern = 'DAB'
    const expected = [4, 9]

    const result = rabinKarpSearch(text, pattern)
    expect(result).to.deep.equal(expected)
  })

  it('should handle multiple occurrences of the pattern', function () {
    const text = 'ABABABABABAB'
    const pattern = 'ABAB'
    const expected = [0, 2, 4, 6, 8]

    const result = rabinKarpSearch(text, pattern)
    expect(result).to.deep.equal(expected)
  })

  it('should handle pattern not found', function () {
    const text = 'ABCD'
    const pattern = 'XYZ'
    const expected = []

    const result = rabinKarpSearch(text, pattern)
    expect(result).to.deep.equal(expected)
  })

  it('should find a pattern at the start of the text', function () {
    expect(rabinKarpSearch('ABCABC', 'ABC')).to.deep.equal([0, 3])
    expect(rabinKarpSearch('abc', 'a')).to.deep.equal([0])
    expect(rabinKarpSearch('abc', 'abc')).to.deep.equal([0])
  })

  it('should find a long pattern', function () {
    const pattern = 'abcdefghijkl'
    expect(rabinKarpSearch(pattern + 'x' + pattern, pattern)).to.deep.equal([
      0, 13
    ])
  })

  it('should return an empty array when the text is shorter than the pattern', function () {
    expect(rabinKarpSearch('ab', 'abc')).to.deep.equal([])
  })
})
