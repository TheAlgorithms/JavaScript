import { perfectNumber } from '../PerfectNumber'

describe('PerfectNumber', () => {
  it('should return true for a perfect cube', () => {
    expect(perfectNumber(28)).toBeTruthy()
  })
  it('should return false for a non perfect cube', () => {
    expect(perfectNumber(10)).toBeFalsy()
  })
})
