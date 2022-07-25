import { isCompositeNumber } from '../IsCompositeNumber'

describe('Testing isCompositeNumber function', () => {
  it('should return true if the number is composite number', () => {
    expect(isCompositeNumber(6)).toBe(true)
  })

  it('should return false if the number is not composite number', () => {
    expect(isCompositeNumber(577)).toBe(false)
  })

  it('should return true if the number is composite number', () => {
    expect(isCompositeNumber(2024)).toBe(true)
  })
})
