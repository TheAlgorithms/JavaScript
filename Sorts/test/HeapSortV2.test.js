import { heapSort } from '../HeapSortV2'

test('The heapsort of the array [5, 4, 3, 2, 1] is [1, 2, 3, 4, 5]', () => {
  const arr = [5, 4, 3, 2, 1]
  const res = heapSort(arr)
  expect(res).toEqual([1, 2, 3, 4, 5])
})

test('The heapsort of the array [] is []', () => {
  const arr = []
  const res = heapSort(arr)
  expect(res).toEqual([])
})

test('The heapsort of the array [15, 24, 13, 22, 11] is [11, 13, 15, 22, 24]', () => {
  const arr = [15, 24, 13, 22, 11]
  const res = heapSort(arr)
  expect(res).toEqual([11, 13, 15, 22, 24])
})
