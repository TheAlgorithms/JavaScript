import { armstrongNumber } from '../ArmstrongNumber'

describe('ArmstrongNumber', () => {
  it('should return true for an armstrong number', () => {
    expect(armstrongNumber(371)).toBeTruthy()
  })

  it('should return false for a non-armstrong number', () => {
    expect(armstrongNumber(300)).toBeFalsy()
  })
  it('should return false for negative values', () => {
    expect(armstrongNumber(-2)).toBeFalsy()
  })
})
