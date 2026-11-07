import { primesInRange } from '../PrimesInRange.js'

describe('primesInRange', () => {
  test('primesInRange(1, 10) returns [2,3,5,7]', () => {
    expect(primesInRange(1, 10)).toEqual([2, 3, 5, 7])
  })

  test('primesInRange(10, 20) returns [11,13,17,19]', () => {
    expect(primesInRange(10, 20)).toEqual([11, 13, 17, 19])
  })

  test('primesInRange(1, 2) returns [2]', () => {
    expect(primesInRange(1, 2)).toEqual([2])
  })

  test('primesInRange(1, 1) returns []', () => {
    expect(primesInRange(1, 1)).toEqual([])
  })

  test('primesInRange(14, 16) returns []', () => {
    expect(primesInRange(14, 16)).toEqual([])
  })

  test('primesInRange(1, 50) has correct count', () => {
    expect(primesInRange(1, 50)).toHaveLength(15)
  })

  test('primesInRange with same start and end that is prime', () => {
    expect(primesInRange(7, 7)).toEqual([7])
  })

  test('throws TypeError for float input', () => {
    expect(() => primesInRange(1.5, 10)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => primesInRange(-1, 10)).toThrow(TypeError)
  })

  test('throws RangeError when start > end', () => {
    expect(() => primesInRange(10, 5)).toThrow(RangeError)
  })
})
