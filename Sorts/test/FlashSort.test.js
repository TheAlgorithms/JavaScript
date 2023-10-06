import { flashSort } from '../FlashSort'

test('The flash sort of the array [3, 0, 2, 5, -1, 4, 1, -2] is [-2, -1, 0, 1, 2, 3, 4, 5]', () => {
  const array = [3, 0, 2, 5, -1, 4, 1, -2]
  const res = flashSort(array)
  expect(res).toEqual([-2, -1, 0, 1, 2, 3, 4, 5])
})

test('The flash sort of the array [-3, 0, 2, -5, -1, 4, 1, -2] is [-5, -3, -2, -1, 0, 1, 2, 4]', () => {
  const array = [-3, 0, 2, -5, -1, 4, 1, -2]
  const res = flashSort(array)
  expect(res).toEqual([-5, -3, -2, -1, 0, 1, 2, 4])
})

test('The flash sort of the array [13, 0, 12, 5, -1, 14, 1, -2] is [-2, -1, 0, 1, 5, 12, 13, 14]', () => {
  const array = [13, 0, 12, 5, -1, 14, 1, -2]
  const res = flashSort(array)
  expect(res).toEqual([-2, -1, 0, 1, 5, 12, 13, 14])
})

test('The flash sort of the array [-3, 0, -2, -5, -1, -4, -1, -2] is [-5, -4, -3, -2, -2, -1, -1, 0]', () => {
  const array = [-3, 0, -2, -5, -1, -4, -1, -2]
  const res = flashSort(array)
  expect(res).toEqual([-5, -4, -3, -2, -2, -1, -1, 0])
})
