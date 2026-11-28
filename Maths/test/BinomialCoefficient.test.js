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

  it('should return exact integers for larger inputs', () => {
    expect(findBinomialCoefficient(25, 2)).toBe(300)
    expect(findBinomialCoefficient(26, 6)).toBe(230230)
    expect(findBinomialCoefficient(30, 13)).toBe(119759850)
    expect(findBinomialCoefficient(52, 5)).toBe(2598960)
  })

  it('should be symmetric in k and n - k', () => {
    expect(findBinomialCoefficient(30, 13)).toBe(
      findBinomialCoefficient(30, 17)
    )
    expect(findBinomialCoefficient(40, 5)).toBe(findBinomialCoefficient(40, 35))
  })

  it('should return 0 when k is greater than n', () => {
    expect(findBinomialCoefficient(3, 5)).toBe(0)
  })

  it('should throw error when supplied arguments other than number', () => {
    expect(() => {
      findBinomialCoefficient('eight', 'three')
    }).toThrow(Error)
  })

  it('should throw error when n is less than zero', () => {
    expect(() => {
      findBinomialCoefficient(-1, 3)
    }).toThrow(Error)
  })

  it('should throw error when k is less than zero', () => {
    expect(() => {
      findBinomialCoefficient(1, -3)
    }).toThrow(Error)
  })

  it('should throw error when n and k are less than zero', () => {
    expect(() => {
      findBinomialCoefficient(-1, -3)
    }).toThrow(Error)
  })
})
