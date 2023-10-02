import { ReverseNumber } from '../ReverseNumber'

describe('ReverseNumber function', () => {
  it.each([
    [12345, 54321],
    [9876, 6789],
    [0, 0],
    [7, 7]
  ])('should reverse a positive number', (value, expected) => {
    expect(ReverseNumber(value)).toBe(expected)
  })
})
