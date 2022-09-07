import { calcFactorial } from '../Factorial'

describe('calcFactorial', () => {
  it('should return a statement for value "0"', () => {
    expect(calcFactorial(0)).toBe(1)
  })

  it('should throw error for "null" and "undefined"', () => {
    expect(() => { calcFactorial(null) }).toThrow(Error)
    expect(() => { calcFactorial(undefined) }).toThrow(Error)
  })

  it('should throw error for negative numbers', () => {
    expect(() => { calcFactorial(-1) }).toThrow(Error)
  })

  it('should return the factorial of a positive number', () => {
    const positiveFactorial = calcFactorial(3)
    expect(positiveFactorial).toBe(6)
  })
})
