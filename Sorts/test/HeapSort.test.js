import { heapSort } from '../HeapSort'

test('The HeapSort of the array [5, 4, 3, 2, 1] is [1, 2, 3, 4, 5]', () => {
  const array = [5, 4, 3, 2, 1]
  const res = heapSort(array)
  expect(res).toEqual([1, 2, 3, 4, 5])
})

test('The HeapSort of the array [-5, -4, -3, -2, -1] is [-5, -4, -3, -2, -1]', () => {
  const array = [-5, -4, -3, -2, -1]
  const res = heapSort(array)
  expect(res).toEqual([-5, -4, -3, -2, -1])
})

test('The HeapSort of the array [50, 43, 31, 52, 91] is [31, 43, 50, 52, 91]', () => {
  const array = [50, 43, 31, 52, 91]
  const res = heapSort(array)
  expect(res).toEqual([31, 43, 50, 52, 91])
})

test('The HeapSort of the array [] is []', () => {
  const array = []
  const res = heapSort(array)
  expect(res).toEqual([])
})
