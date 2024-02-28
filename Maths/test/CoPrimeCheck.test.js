import { CoPrimeCheck } from '../CoPrimeCheck'

describe('CoPrimeCheck', () => {
  it.each([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 7],
    [20, 21],
    [5, 7],
    [-5, -7],
    [1, 0],
    [-1, 0]
  ])('returns true for %j and %i', (inputA, inputB) => {
    expect(CoPrimeCheck(inputA, inputB)).toBe(true)
    expect(CoPrimeCheck(inputB, inputA)).toBe(true)
  })

  it.each([
    [5, 15],
    [13 * 17 * 19, 17 * 23 * 29],
    [2, 0],
    [0, 0]
  ])('returns false for %j and %i', (inputA, inputB) => {
    expect(CoPrimeCheck(inputA, inputB)).toBe(false)
    expect(CoPrimeCheck(inputB, inputA)).toBe(false)
  })

  it('should throw when any of the inputs is not a number', () => {
    expect(() => CoPrimeCheck('1', 2)).toThrowError()
    expect(() => CoPrimeCheck(1, '2')).toThrowError()
  })
})
