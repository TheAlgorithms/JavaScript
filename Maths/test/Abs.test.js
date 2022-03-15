import { abs } from '../Abs'

describe('Testing abs function', () => {
  it('Testing for invalid types', () => {
    expect(() => abs('234a')).toThrow()
    expect(() => abs({})).toThrow()
    expect(() => abs([12, -32, -60])).toThrow()
  })

  it('Testing for number of string type', () => {
    expect(abs('-345')).toBe(345)
    expect(abs('-345.455645')).toBe(345.455645)
  })

  it('Testing for a boolean type', () => {
    expect(abs(true)).toBe(1)
    expect(abs(false)).toBe(0)
  })

  it('should return an absolute value of a negative number', () => {
    const absOfNegativeNumber = abs(-34)
    expect(absOfNegativeNumber).toBe(34)
  })

  it('should return an absolute value of a positive number', () => {
    const absOfPositiveNumber = abs(50)
    expect(absOfPositiveNumber).toBe(50)
  })

  it('should return an absolute value of a zero number', () => {
    const absOfPositiveNumber = abs(0)
    expect(absOfPositiveNumber).toBe(0)
  })

  it('should return an absolute value of any floating number', () => {
    const absOfPositiveNumber = abs(-20.2034)
    expect(absOfPositiveNumber).toBe(20.2034)
  })
})
