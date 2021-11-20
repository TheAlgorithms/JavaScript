import { tribonacci } from '../TribonacciNumber'

describe('TribonacciNumber', () => {
  it('tribonacci of 0', () => {
    expect(tribonacci(0)).toBe(0)
  })

  it('tribonacci of 1', () => {
    expect(tribonacci(1)).toBe(1)
  })

  it('tribonacci of 2', () => {
    expect(tribonacci(2)).toBe(1)
  })

  it('tribonacci of 10', () => {
    expect(tribonacci(10)).toBe(149)
  })

  it('tribonacci of 25', () => {
    expect(tribonacci(25)).toBe(1389537)
  })
})
