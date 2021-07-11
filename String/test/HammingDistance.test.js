import { hammingDistance } from '../HammingDistance'

test('should throw an error when trying to compare the strings of different length', () => {
  const compareStringsOfDifferentLength = () => {
    hammingDistance('abc', 'abcd')
  }

  expect(compareStringsOfDifferentLength).toThrowError()
})

test('should calculate difference between two strings', () => {
  expect(hammingDistance('a', 'a')).toBe(0)
})

test('should calculate difference between two strings', () => {
  expect(hammingDistance('abc', 'add')).toBe(2)
})

test('should calculate difference between two strings', () => {
  expect(hammingDistance('1011101', '1001001')).toBe(2)
})
