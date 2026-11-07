import { isDudeneyNumber } from '../DudeneyNumber.js'

describe('isDudeneyNumber', () => {
  test('1 is a Dudeney number (1³=1, 1=1)', () => {
    expect(isDudeneyNumber(1)).toBe(true)
  })

  test('512 is a Dudeney number (8³=512, 5+1+2=8)', () => {
    expect(isDudeneyNumber(512)).toBe(true)
  })

  test('4913 is a Dudeney number (17³=4913, 4+9+1+3=17)', () => {
    expect(isDudeneyNumber(4913)).toBe(true)
  })

  test('5832 is a Dudeney number (18³=5832, 5+8+3+2=18)', () => {
    expect(isDudeneyNumber(5832)).toBe(true)
  })

  test('17576 is a Dudeney number (26³=17576, 1+7+5+7+6=26)', () => {
    expect(isDudeneyNumber(17576)).toBe(true)
  })

  test('100 is NOT a Dudeney number', () => {
    expect(isDudeneyNumber(100)).toBe(false)
  })

  test('8 is NOT a Dudeney number (2³=8, 8≠2)', () => {
    expect(isDudeneyNumber(8)).toBe(false)
  })

  test('27 is NOT a Dudeney number (3³=27, 2+7=9≠3)', () => {
    expect(isDudeneyNumber(27)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isDudeneyNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isDudeneyNumber(-512)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isDudeneyNumber(51.2)).toThrow(TypeError)
  })
})
