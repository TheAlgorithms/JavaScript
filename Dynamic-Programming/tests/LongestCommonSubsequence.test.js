import { longestCommonSubsequence } from '../LongestCommonSubsequence'

describe('LongestCommonSubsequence', () => {
  it('expects to return an empty string for empty inputs', () => {
    expect(longestCommonSubsequence('', '')).toEqual(''.length)
    expect(longestCommonSubsequence('aaa', '')).toEqual(''.length)
    expect(longestCommonSubsequence('', 'bbb')).toEqual(''.length)
  })

  it('expects to return an empty string for inputs without a common subsequence', () => {
    expect(longestCommonSubsequence('abc', 'deffgf')).toEqual(''.length)
    expect(longestCommonSubsequence('de', 'ghm')).toEqual(''.length)
    expect(longestCommonSubsequence('aupj', 'xyz')).toEqual(''.length)
  })

  it('expects to return the longest common subsequence, short inputs', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toEqual('abc'.length)
    expect(longestCommonSubsequence('abc', 'abcd')).toEqual('abc'.length)
    expect(longestCommonSubsequence('abc', 'ab')).toEqual('ab'.length)
    expect(longestCommonSubsequence('abc', 'a')).toEqual('a'.length)
    expect(longestCommonSubsequence('abc', 'b')).toEqual('b'.length)
    expect(longestCommonSubsequence('abc', 'c')).toEqual('c'.length)
    expect(longestCommonSubsequence('abd', 'abcd')).toEqual('abd'.length)
    expect(longestCommonSubsequence('abd', 'ab')).toEqual('ab'.length)
    expect(longestCommonSubsequence('abc', 'abd')).toEqual('ab'.length)
  })

  it('expects to return the longest common subsequence, medium-length inputs', () => {
    expect(longestCommonSubsequence('bsbininm', 'jmjkbkjkv')).toEqual('b'.length)
    expect(longestCommonSubsequence('oxcpqrsvwf', 'shmtulqrypy')).toEqual('qr'.length)
  })
})
