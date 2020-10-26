import { convertToBinary } from '../BinaryConvert'

describe('convertBinary', () => {
  it('should return the length of number', () => {
    expect(convertToBinary(12)).toBe(7)
  })

  it('should return the correct value', () => {
    expect(convertBinary(12)).toBe('1 1 0 0')
  })
})
