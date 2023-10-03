import { shellSort } from '../ShellSort'

test('The ShellSort of the array [5, 4, 3, 2, 1] is [1, 2, 3, 4, 5]', () => {
  const arr = [5, 4, 3, 2, 1]
  const res = shellSort(arr)
  expect(res).toEqual([1, 2, 3, 4, 5])
})

test('The ShellSort of the array [] is []', () => {
  const arr = []
  const res = shellSort(arr)
  expect(res).toEqual([])
})

test('The ShellSort of the array [15, 24, 31, 42, 11] is [11, 15, 24, 31, 42]', () => {
  const arr = [15, 24, 31, 42, 11]
  const res = shellSort(arr)
  expect(res).toEqual([11, 15, 24, 31, 42])
})

test('The ShellSort of the array [121, 190, 169] is [121, 169, 190]', () => {
  const arr = [121, 190, 169]
  const res = shellSort(arr)
  expect(res).toEqual([121, 169, 190])
})
