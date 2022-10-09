import { fastFibonacci } from '../FastFibonacciNumber'

describe('Testing FibonacciNumber', () => {
  it('Testing for invalid type', () => {
    expect(() => fastFibonacci('0')).toThrowError()
    expect(() => fastFibonacci('12')).toThrowError()
    expect(() => fastFibonacci(true)).toThrowError()
  })

  it('fast fibonacci of 0', () => {
    expect(fastFibonacci(0)).toBe(0)
  })

  it('fast fibonacci of 1', () => {
    expect(fastFibonacci(1)).toBe(1)
  })

  it('fast fibonacci of 10', () => {
    expect(fastFibonacci(10)).toBe(55)
  })

  it('fast fibonacci of 25', () => {
    expect(fastFibonacci(25)).toBe(75025)
  })

  it('fast fibonacci of 40', () => {
    expect(fastFibonacci(40)).toBe(102334155)
  })
})
