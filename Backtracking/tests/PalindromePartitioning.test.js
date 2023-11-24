import PalindromePartitioning from '../PalindromePartitioning'

describe('PalindromePartitioning', () => {
  it('should partition a string into palindromes', () => {
    const pp = new PalindromePartitioning()
    const result = pp.partition('aab')

    expect(result).toEqual(
      expect.arrayContaining([
        ['a', 'a', 'b'],
        ['aa', 'b']
      ])
    )
  })

  it('should handle empty string', () => {
    const pp = new PalindromePartitioning()
    const result = pp.partition('')

    expect(result).toEqual([[]])
  })

  it('should handle a single character string', () => {
    const pp = new PalindromePartitioning()
    const result = pp.partition('c')

    expect(result).toEqual([['c']])
  })
})
