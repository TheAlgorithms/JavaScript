import { radixSort } from '../RadixSort'

test('The RadixSort of the array [4, 3, 2, 1] is [1, 2, 3, 4]', () => {
  const arr = [4, 3, 2, 1]
  const res = radixSort(arr, 10)
  expect(res).toEqual([1, 2, 3, 4])
})

test('The RadixSort of the array [] is []', () => {
  const arr = []
  const res = radixSort(arr, 10)
  expect(res).toEqual([])
})

test('The RadixSort of the array [14, 16, 10, 12] is [10, 12, 14, 16]', () => {
  const arr = [14, 16, 10, 12]
  const res = radixSort(arr, 10)
  expect(res).toEqual([10, 12, 14, 16])
})
