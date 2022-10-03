import { uniquePaths } from '../UniquePaths'

test('Base Case 1', () => {
  const rows = 3
  const cols = 7
  expect(uniquePaths(rows, cols)).toBe(28)
})

test('Base Case 2', () => {
  const rows = 3
  const cols = 2
  expect(uniquePaths(rows, cols)).toBe(3)
})

test('Base Case 3', () => {
  const rows = 8
  const cols = 14
  expect(uniquePaths(rows, cols)).toBe(77520)
})
