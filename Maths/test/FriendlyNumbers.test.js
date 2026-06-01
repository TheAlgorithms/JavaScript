import { FriendlyNumbers } from '../FriendlyNumbers'

describe('FriendlyNumbers', () => {
  it('should return true for the perfect-number pair 6 and 28', () => {
    expect(FriendlyNumbers(6, 28)).toBe(true)
  })

  it('should return true for the friendly pair 30 and 140', () => {
    expect(FriendlyNumbers(30, 140)).toBe(true)
  })

  it('should return false for numbers with different abundancy', () => {
    expect(FriendlyNumbers(15, 20)).toBe(false)
  })

  it('should throw for invalid input', () => {
    expect(() => FriendlyNumbers(6, 6)).toThrow()
    expect(() => FriendlyNumbers(0, 5)).toThrow()
    expect(() => FriendlyNumbers(1.5, 5)).toThrow()
  })
})
