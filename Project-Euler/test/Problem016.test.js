import { powerDigitSum } from '../Problem016'

describe('Check Problem 16 - Power digit sum', () => {
  it('Power digit sum of 2^15', () => {
    expect(powerDigitSum(2, 15)).toBe(26)
  })

  it('Power digit sum of 2^1000', () => {
    expect(powerDigitSum()).toBe(1366)
    expect(powerDigitSum(2, 1000)).toBe(1366)
  })

  it('Power digit sum of 3^5000', () => {
    expect(powerDigitSum(3, 5000)).toBe(11097)
  })
})
