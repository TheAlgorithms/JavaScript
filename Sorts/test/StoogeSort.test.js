import { stoogeSort } from '../StoogeSort'

test('The StoogeSort of the array [1, 6, 4, 7, 2] is [1, 2, 4, 6, 7]', () => {
  const arr = [1, 6, 4, 7, 2]
  const res = stoogeSort(arr, 0, arr.length)
  expect(res).toEqual([1, 2, 4, 6, 7])
})

test('The StoogeSort of the array [] is []', () => {
  const arr = []
  const res = stoogeSort(arr, 0, arr.length)
  expect(res).toEqual([])
})

test('The StoogeSort of the array [46, 15, 49, 65, 23] is [15, 23, 46, 49, 65]', () => {
  const arr = [46, 15, 49, 65, 23]
  const res = stoogeSort(arr, 0, arr.length)
  expect(res).toEqual([15, 23, 46, 49, 65])
})

test('The StoogeSort of the array [136, 459, 132, 566, 465] is [132, 136, 459, 465, 566]', () => {
  const arr = [136, 459, 132, 566, 465]
  const res = stoogeSort(arr, 0, arr.length)
  expect(res).toEqual([132, 136, 459, 465, 566])
})

test('The StoogeSort of the array [45, 3, 156, 1, 56] is [1, 3, 45, 56, 156]', () => {
  const arr = [45, 3, 156, 1, 56]
  const res = stoogeSort(arr, 0, arr.length)
  expect(res).toEqual([1, 3, 45, 56, 156])
})
