import { quadraticRoots } from '../QuadraticRoots.js'

describe('quadratic roots', () => {
  it('returns an array with two real roots when the discriminant is positive', () => {
    expect(quadraticRoots(1, -3, 2)).toEqual([2, 1])
  })
  it('returns an array with one real root when the discriminant is zero', () => {
    expect(quadraticRoots(1, -2, 1)).toEqual([1])
  })
  it('returns an empty array indicating no real roots when the discriminant is negative', () => {
    expect(quadraticRoots(1, 2, 5)).toEqual([])
  })
})
