import { BinaryConvert } from '../BinaryConvert'

describe('BinaryConvert', () => {
  it('should return the correct value', () => {
    expect(BinaryConvert(4)).toBe(100)
  })
  it('should return the correct value', () => {
    expect(BinaryConvert(12)).toBe(1100)
  })
  it('should return the correct value of the sum from two number', () => {
    expect(BinaryConvert(12 + 2)).toBe(1110)
  })
  it('should return the correct value of the subtract from two number', () => {
    expect(BinaryConvert(245 - 56)).toBe(10111101)
  })
  it('should return the correct value', () => {
    expect(BinaryConvert(254)).toBe(11111110)
  })
  it('should return the correct value', () => {
    expect(BinaryConvert(63483)).toBe(1111011111111011)
  })
})
