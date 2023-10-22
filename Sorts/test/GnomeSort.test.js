import { gnomeSort } from '../GnomeSort'

test('The gnomeSort of the array [5, 4, 3, 2, 1] is [1, 2, 3, 4, 5]', () => {
  const arr = [5, 4, 3, 2, 1]
  const res = gnomeSort(arr)
  expect(res).toEqual([1, 2, 3, 4, 5])
})

test('The gnomeSort of the array [-5, 4, -3, 2, -1] is [-5, -3, -1, 2, 4]', () => {
  const arr = [-5, 4, -3, 2, -1]
  const res = gnomeSort(arr)
  expect(res).toEqual([-5, -3, -1, 2, 4])
})

test('The gnomeSort of the array [15, 4, -13, 2, -11] is [-13, -11, 2, 4, 15]', () => {
  const arr = [15, 4, -13, 2, -11]
  const res = gnomeSort(arr)
  expect(res).toEqual([-13, -11, 2, 4, 15])
})
