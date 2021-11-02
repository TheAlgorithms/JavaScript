import { PermutationinString } from '../PermutationinString.js'

describe('PermutationinString', () => {
  it("should  return true if one of s1's permutations is the substring of s2", () => {
    expect(PermutationinString('ab', 'eidbaooo')).toEqual(true)
    expect(PermutationinString('abc', 'bcab')).toEqual(true)
    expect(PermutationinString('ab', 'eidboaoo')).toEqual(false)
    expect(PermutationinString('abc', '')).toEqual(false)
  })
})
