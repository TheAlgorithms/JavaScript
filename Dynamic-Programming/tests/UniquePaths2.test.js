import { uniquePaths2 } from '../UniquePaths2'

describe('Unique Paths2', () => {
  // Should return number of ways, taken into account the obstacles
  test('Case 1: there are obstacles in the way', () => {
    expect(uniquePaths2([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toEqual(2)
    expect(uniquePaths2([[0, 0, 0], [0, 1, 0], [0, 0, 0], [1, 0, 0]])).toEqual(3)
  })
  // Should return number of all possible ways to reach right-bottom corner
  test('Case 2: there are no obstacles in the way', () => {
    expect(uniquePaths2([[0, 0, 0], [0, 0, 0], [0, 0, 0]])).toEqual(6)
    expect(uniquePaths2([[0, 0, 0], [0, 0, 0]])).toEqual(3)
  })
  // Should throw an exception b/c input data has wrong type
  test('Case 3: there are wrong type of input data', () => {
    expect(() => uniquePaths2('wrong input')).toThrow()
    expect(() => uniquePaths2(100)).toThrow()
  })
})
