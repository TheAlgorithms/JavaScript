import { zeckendorfRepresentation } from '../ZeckendorfRepresentation.js'

describe('zeckendorfRepresentation', () => {
  test('zeckendorfRepresentation(1) returns [1]', () => {
    expect(zeckendorfRepresentation(1)).toEqual([1])
  })

  test('zeckendorfRepresentation(2) returns [2]', () => {
    expect(zeckendorfRepresentation(2)).toEqual([2])
  })

  test('zeckendorfRepresentation(3) returns [3]', () => {
    expect(zeckendorfRepresentation(3)).toEqual([3])
  })

  test('zeckendorfRepresentation(11) returns [8, 3]', () => {
    expect(zeckendorfRepresentation(11)).toEqual([8, 3])
  })

  test('zeckendorfRepresentation(100) returns [89, 8, 3]', () => {
    expect(zeckendorfRepresentation(100)).toEqual([89, 8, 3])
  })

  test('result sums to original number', () => {
    const result = zeckendorfRepresentation(50)
    const sum = result.reduce((acc, n) => acc + n, 0)
    expect(sum).toBe(50)
  })

  test('no two consecutive Fibonacci numbers in result', () => {
    const fibs = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    const result = zeckendorfRepresentation(100)
    for (let i = 0; i < result.length - 1; i++) {
      const idx1 = fibs.indexOf(result[i])
      const idx2 = fibs.indexOf(result[i + 1])
      expect(Math.abs(idx1 - idx2)).toBeGreaterThan(1)
    }
  })

  test('throws TypeError for zero', () => {
    expect(() => zeckendorfRepresentation(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => zeckendorfRepresentation(-11)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => zeckendorfRepresentation(11.5)).toThrow(TypeError)
  })
})
