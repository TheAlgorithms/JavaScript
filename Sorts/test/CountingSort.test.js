import { countingSort } from '../CountingSort'

test('The countingSort of the array [3, 0, 2, 5, 4, 1] is [0, 1, 2, 3, 4, 5]', () => {
  const array = [3, 0, 2, 5, 4, 1]
  const res = countingSort(array, 0, 5)
  expect(res).toEqual([0, 1, 2, 3, 4, 5])
})

test('The countingSort of the array [6, 4, 2, 1, 3, 5] is [1, 2, 3, 4, 5, 6]', () => {
  const array = [6, 4, 2, 1, 3, 5]
  const res = countingSort(array, 1, 6)
  expect(res).toEqual([1, 2, 3, 4, 5, 6])
})

test('The countingSort of the array [11, 14, 12, 15, 16, 13] is [11, 12, 13, 14, 15, 16]', () => {
  const array = [11, 14, 12, 15, 16, 13]
  const res = countingSort(array, 11, 16)
  expect(res).toEqual([11, 12, 13, 14, 15, 16])
})

test('The countingSort of the array [13, 18, 2, 15, 43, 11] is [2, 11, 13, 15, 18, 43]', () => {
  const array = [13, 18, 2, 15, 43, 11]
  const res = countingSort(array, 2, 43)
  expect(res).toEqual([2, 11, 13, 15, 18, 43])
})
