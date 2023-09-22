// Import the functions to be tested
import { ReverseNumber, reverseNumberUsingString } from '../ReverseNumber' // Replace 'your-module' with the actual module path

describe('ReverseNumber function', () => {
  it.each([
    [12345, 54321],
    [9876, 6789],
    [0, 0],
    [7, 7]
  ])('should reverse a positive number', (value, expected) => {
    expect(ReverseNumber(value)).toBe(expected)
  })

  it.each([
    [12345, 54321],
    [-9876, -6789],
    [0, 0],
    [7, 7]
  ])('should reverse a positive number', (value, expected) => {
    expect(reverseNumberUsingString(value)).toBe(expected)
  })
})
