import { letterCombinations } from '../LetterCombination'

describe('Letter Combinations', () => {
  it('should return empty array if provided string is not valid', () => {
    const result = letterCombinations('')
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(0)
  })

  it('should return empty array if provided string is empty', () => {
    const result = letterCombinations(null)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(0)
  })

  it('should return letter combination of 234', () => {
    const result = letterCombinations('234')
    expect(result).toEqual([
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi'
    ])
  })
})
