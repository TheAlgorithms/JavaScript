import { heapSort } from '../HeapSortV2'

test('The heapSort of the array [4, 3, 2, 1] is [1, 2, 3, 4]', () => {
  const arr = [4, 3, 2, 1]
  const res = heapSort(arr)
  expect(res).toEqual([1, 2, 3, 4])
})

test('The heapSort of the array [] is []', () => {
  const arr = []
  const res = heapSort(arr)
  expect(res).toEqual([])
})

test('The heapSort of the array [41, 31, 32, 31] is [31, 31, 32, 41]', () => {
  const arr = [41, 31, 32, 31]
  const res = heapSort(arr)
  expect(res).toEqual([31, 31, 32, 41])
})
