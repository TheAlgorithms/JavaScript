import { uniquePaths } from '../UniquePaths'

test('Test case for UniquePaths', () => {
  expect(uniquePaths(3, 7)).toBe(28)
  expect(uniquePaths(3, 2)).toBe(3)
  expect(uniquePaths(8, 14)).toBe(77520)
})
