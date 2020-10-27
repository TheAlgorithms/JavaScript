import { PrimeCheck } from '../PrimeCheck'

describe('PrimeCheck', () => {
  it('should return true for Prime Numbers', () => {
    expect(PrimeCheck(1000003)).toBeTruthy()
  })
  it('should return false for Non Prime Numbers', () => {
    expect(PrimeCheck(1000001)).toBeFalsy()
  })
  it('should return false for 1 and 0', () => {
    expect(PrimeCheck(1)).toBeFalsy()
    expect(PrimeCheck(0)).toBeFalsy()
  })
})
