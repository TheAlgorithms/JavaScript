import { uniquePaths } from '../UniquePaths'

test('Test case with rows=3 and cols=7', () => {
  const rows = 3
  const cols = 7
  expect(uniquePaths(rows, cols)).toBe(28)
})

test('Test case with rows=3 and cols=2', () => {
  const rows = 3
  const cols = 2
  expect(uniquePaths(rows, cols)).toBe(3)
})

test('Test case with rows=8 and cols=14', () => {
  const rows = 8
  const cols = 14
  expect(uniquePaths(rows, cols)).toBe(77520)
})
