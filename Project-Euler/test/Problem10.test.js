import { calculateSumOfPrimeNumbers } from '../Problem10'

describe('checkAnagram', () => {
  it('Return the sum of prime numbers upto but less than 14', () => {
    const SUT = calculateSumOfPrimeNumbers(14)
    expect(SUT).toBe(41)
  })
  it('Return the sum of prime numbers upto but less than 10', () => {
    const SUT = calculateSumOfPrimeNumbers(10)
    expect(SUT).toBe(17)
  })
  it('Return the sum of prime numbers upto but less than 100', () => {
    const SUT = calculateSumOfPrimeNumbers(100)
    expect(SUT).toBe(1060)
  })
})
