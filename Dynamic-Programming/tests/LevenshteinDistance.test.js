import { calculateLevenshteinDp } from '../LevenshteinDistance'

test('Should return the distance counting additions and removals', () => {
  const from = 'kitten'
  const to = 'sitting'
  expect(calculateLevenshteinDp(from, to)).toBe(3)
})

test('Should return the distance based on replacements in the middle of the strings', () => {
  const from = 'book'
  const to = 'back'
  expect(calculateLevenshteinDp(from, to)).toBe(2)
})

test('Should return the distance for strings with different length', () => {
  const from = 'sunday'
  const to = 'saturday'
  expect(calculateLevenshteinDp(from, to)).toBe(3)
})
