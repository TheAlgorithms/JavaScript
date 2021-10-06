import { BinaryConvert } from '../BinaryConvert'

describe('Binary Convert', () => {
  it('should return the correct value', () => {
    expect(BinaryConvert(12)).toBe(1100)
  })
  it('should return the correct value of the sum from two number', () => {
    expect(BinaryConvert(12 + 2)).toBe(1110)
  })
})
