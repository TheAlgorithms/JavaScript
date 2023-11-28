import partitionPalindrome from '../PalindromePartitioning'

describe('Palindrome Partitioning', () => {
  it('should return all possible palindrome partitioning of s', () => {
    expect(partitionPalindrome('aab')).toEqual([
      ['a', 'a', 'b'],
      ['aa', 'b']
    ])
    expect(partitionPalindrome('a')).toEqual([['a']])
    expect(partitionPalindrome('ab')).toEqual([['a', 'b']])
  })
})
