import { calculateLevenshteinDp } from '../LevenshteinDistance'

test('Test Case 1', () => {
  const from = 'kitten'
  const to = 'sitting'
  expect(calculateLevenshteinDp(from, to)).toBe(3)
})

test('Test Case 2', () => {
  const from = 'book'
  const to = 'back'
  expect(calculateLevenshteinDp(from, to)).toBe(2)
})

test('Test Case 3', () => {
  const from = 'sunday'
  const to = 'saturday'
  expect(calculateLevenshteinDp(from, to)).toBe(3)
})
