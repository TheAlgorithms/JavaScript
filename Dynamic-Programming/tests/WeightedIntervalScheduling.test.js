import { weightedIntervalScheduling } from '../WeightedIntervalScheduling'

test('basic weighted interval scheduling', () => {
  const intervals = [
    { start: 1, end: 3, profit: 5 },
    { start: 2, end: 5, profit: 6 },
    { start: 4, end: 6, profit: 5 },
    { start: 6, end: 7, profit: 4 },
    { start: 5, end: 8, profit: 11 },
    { start: 7, end: 9, profit: 2 }
  ]

  expect(weightedIntervalScheduling(intervals)).toBe(17)
})

test('empty intervals', () => {
  expect(weightedIntervalScheduling([])).toBe(0)
})

test('single interval', () => {
  expect(weightedIntervalScheduling([{ start: 1, end: 2, profit: 10 }])).toBe(
    10
  )
})

test('throws error for invalid input', () => {
  expect(() => weightedIntervalScheduling(null)).toThrow(
    'Input must be an array of intervals'
  )
})
