import { egyptianFraction } from '../EgyptianFraction.js'

describe('egyptianFraction', () => {
  test('egyptianFraction(2, 3) returns [2, 6]', () => {
    expect(egyptianFraction(2, 3)).toEqual([2, 6])
  })

  test('egyptianFraction(3, 4) returns [2, 4]', () => {
    expect(egyptianFraction(3, 4)).toEqual([2, 4])
  })

  test('egyptianFraction(1, 2) returns [2]', () => {
    expect(egyptianFraction(1, 2)).toEqual([2])
  })

  test('result unit fractions sum to original fraction', () => {
    const denoms = egyptianFraction(2, 3)
    const sum = denoms.reduce((acc, d) => acc + 1 / d, 0)
    expect(sum).toBeCloseTo(2 / 3, 10)
  })

  test('result unit fractions sum for 3/4', () => {
    const denoms = egyptianFraction(3, 4)
    const sum = denoms.reduce((acc, d) => acc + 1 / d, 0)
    expect(sum).toBeCloseTo(3 / 4, 10)
  })

  test('all denominators are distinct', () => {
    const denoms = egyptianFraction(2, 3)
    const unique = new Set(denoms)
    expect(unique.size).toBe(denoms.length)
  })

  test('throws TypeError for zero numerator', () => {
    expect(() => egyptianFraction(0, 3)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => egyptianFraction(-2, 3)).toThrow(TypeError)
  })

  test('throws RangeError when numerator >= denominator', () => {
    expect(() => egyptianFraction(3, 3)).toThrow(RangeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => egyptianFraction(2.5, 3)).toThrow(TypeError)
  })
})
