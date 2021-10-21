import { factorialDigitSum } from '../Problem020'

describe('Check Problem 20 - Factorial digit sum', () => {
  it('Factorial digit sum of 10!', () => {
    expect(factorialDigitSum(10)).toBe(27)
  })

  it('Factorial digit sum of 100!', () => {
    expect(factorialDigitSum()).toBe(648)
    expect(factorialDigitSum(100)).toBe(648)
  })

  it('Factorial digit sum of 1000!', () => {
    expect(factorialDigitSum(1000)).toBe(10539)
  })
})
