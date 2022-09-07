import { findBinomialCoefficient } from '../BinomialCoefficient.js'

describe('Testing findBinomialCoefficient function', () => {
  it('should return 56', () => {
    const binomialCoefficient = findBinomialCoefficient(8, 3)
    expect(binomialCoefficient).toBe(56)
  })

  it('should return 10', () => {
    const binomialCoefficient = findBinomialCoefficient(5, 2)
    expect(binomialCoefficient).toBe(10)
  })

  it('should throw error when supplied arguments other than number', () => {
    expect(() => { findBinomialCoefficient('eight', 'three') }).toThrow(Error)
  })

  it('should throw error when n is less than zero', () => {
    expect(() => { findBinomialCoefficient(-1, 3) }).toThrow(Error)
  })

  it('should throw error when k is less than zero', () => {
    expect(() => { findBinomialCoefficient(1, -3) }).toThrow(Error)
  })

  it('should throw error when n and k are less than zero', () => {
    expect(() => { findBinomialCoefficient(-1, -3) }).toThrow(Error)
  })
})
