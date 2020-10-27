import { Polynomial } from '../Polynomial'

describe('Polynomial', () => {
  it('should not return a expression for zero', () => {
    const polynomial = new Polynomial([0])
    expect(polynomial.display()).toBe('')
  })
  it('should not return an expression for zero values', () => {
    const polynomial = new Polynomial([0, 0, 0, 0, 0])
    expect(polynomial.display()).toBe('')
  })
  it('should return an expression for single a non zero value', () => {
    const polynomial = new Polynomial([9])
    expect(polynomial.display()).toBe('(9)')
  })
  it('should return an expression for two values', () => {
    const polynomial = new Polynomial([3, 2])
    expect(polynomial.display()).toBe('(2x) + (3)')
  })
  it('should return an expression for values including zero', () => {
    const polynomial = new Polynomial([0, 2])
    expect(polynomial.display()).toBe('(2x)')
  })
  it('should return an expression and evaluate it', () => {
    const polynomial = new Polynomial([1, 2, 3, 4])
    expect(polynomial.display()).toBe('(4x^3) + (3x^2) + (2x) + (1)')
    expect(polynomial.evaluate(2)).toEqual(49)
  })
  it('should evaluate 0 for zero values', () => {
    const polynomial = new Polynomial([0, 0, 0, 0])
    expect(polynomial.evaluate(5)).toEqual(0)
  })
  it('should evaluate for negative values', () => {
    const polynomial = new Polynomial([-1, -3, -4, -7])
    expect(polynomial.evaluate(-5)).toBe(789)
  })
})
