import { Timsort } from '../TimSort'

test('The Timsort of the array [5, 4, 3, 2, 1] is [1, 2, 3, 4, 5]', () => {
  const arr = [5, 4, 3, 2, 1]
  const res = Timsort(arr)
  expect(res).toEqual([1, 2, 3, 4, 5])
})

test('The Timsort of the array [] is []', () => {
  const arr = []
  const res = Timsort(arr)
  expect(res).toEqual([])
})

test('The Timsort of the array [-5, -4, -3, -2, -1] is [-5, -4, -3, -2, -1]', () => {
  const arr = [-5, -4, -3, -2, -1]
  const res = Timsort(arr)
  expect(res).toEqual([-5, -4, -3, -2, -1])
})

test('The Timsort of the array [9, 0, -5, -11, 3] is [-11, -5, 0, 3, 9]', () => {
  const arr = [9, 0, -5, -11, 3]
  const res = Timsort(arr)
  expect(res).toEqual([-11, -5, 0, 3, 9])
})
