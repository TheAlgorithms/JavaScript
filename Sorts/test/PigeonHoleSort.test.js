import { pigeonHoleSort } from '../PigeonHoleSort'

test('The pigeonHoleSort of the array [1, 4, 3, 2] is [1, 2, 3, 4]', () => {
  const arr = [1, 4, 3, 2]
  const res = pigeonHoleSort(arr)
  expect(res).toEqual([1, 2, 3, 4])
})

test('The pigeonHoleSort of the array [5, 4, 1, 2] is [1, 2, 4, 5]', () => {
  const arr = [5, 4, 1, 2]
  const res = pigeonHoleSort(arr)
  expect(res).toEqual([1, 2, 4, 5])
})

test('The pigeonHoleSort of the array [18, 31, 29, 35, 11] is [11, 18, 29, 31, 35]', () => {
  const arr = [18, 31, 29, 35, 11]
  const res = pigeonHoleSort(arr)
  expect(res).toEqual([11, 18, 29, 31, 35])
})
