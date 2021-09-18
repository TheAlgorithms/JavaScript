import { checkFlatCase } from '../CheckFlatCase'

describe('checkFlatCase function', () => {
  it('should return false when the input string is not in flatcase', () => {
    const actual = checkFlatCase('this is not in flatcase')
    expect(actual).toBe(false)
  })

  it('should return true when the input string is a single letter character', () => {
    const actual = checkFlatCase('a')
    expect(actual).toBe(true)
  })

  it('should return true when the input string is a string of lowercase letter characters with no spaces', () => {
    const actual = checkFlatCase('abcdefghijklmnopqrstuvwxyz')
    expect(actual).toBe(true)
  })
})
