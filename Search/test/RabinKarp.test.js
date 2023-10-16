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
    const expected = [2, 4, 6, 8]

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
})
