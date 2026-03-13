import { jumpSearchOptimized } from '../JumpSearchOptimized'

test('jumpSearchOptimized([0, 0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90], 77) => 10', () => {
  const arr = [0, 0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90]
  const res = jumpSearchOptimized(arr, 77)
  expect(res).toEqual(10)
})

test('jumpSearchOptimized([11, 12, 15, 65, 78, 90], 4) => -1', () => {
  const arr = [11, 12, 15, 65, 78, 90]
  const res = jumpSearchOptimized(arr, 4)
  expect(res).toEqual(-1)
})

test('jumpSearchOptimized([11, 12, 15, 65, 78, 90], 11) => 0', () => {
  const arr = [11, 12, 15, 65, 78, 90]
  const res = jumpSearchOptimized(arr, 11)
  expect(res).toEqual(0)
})

test('jumpSearchOptimized([], 50) => -1', () => {
  const arr = []
  const res = jumpSearchOptimized(arr, 50)
  expect(res).toEqual(-1)
})

test('jumpSearchOptimized([5, 10, 15, 20, 25], 25) => 4', () => {
  const arr = [5, 10, 15, 20, 25]
  const res = jumpSearchOptimized(arr, 25)
  expect(res).toEqual(4)
})

test('jumpSearchOptimized([1, 3, 5, 7, 9], 2) => -1', () => {
  const arr = [1, 3, 5, 7, 9]
  const res = jumpSearchOptimized(arr, 2)
  expect(res).toEqual(-1)
})
