import { oddEvenSort } from '../OddEvenSort'

test('The OddEvenSort of the array [5, 4, 3, 2, 1] is [1, 2, 3, 4, 5]', () => {
  const arr = [5, 4, 3, 2, 1]
  const res = oddEvenSort(arr)
  expect(res).toEqual([1, 2, 3, 4, 5])
})

test('The OddEvenSort of the array [] is []', () => {
  const arr = []
  const res = oddEvenSort(arr)
  expect(res).toEqual([])
})

test('The OddEvenSort of the array [10, 14, 12, 20] is [10, 12, 14, 20]', () => {
  const arr = [10, 14, 12, 20]
  const res = oddEvenSort(arr)
  expect(res).toEqual([10, 12, 14, 20])
})

test('The OddEvenSort of the array [166, 169, 144] is [144, 166, 169]', () => {
  const arr = [166, 169, 144]
  const res = oddEvenSort(arr)
  expect(res).toEqual([144, 166, 169])
})
