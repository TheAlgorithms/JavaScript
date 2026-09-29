import { interpolationSearch } from '../InterpolationSearch'

test.each([
  [[7], 7, 0],
  [[7, 7, 7], 7, 0],
  [[-4, -4, -4], -4, 0],
  [[0, 0], 0, 0],
  [[7], 6, -1],
  [[7, 7, 7], 8, -1],
  [[], 7, -1]
])('interpolationSearch(%j, %s) => %s', (array, key, expected) => {
  expect(interpolationSearch(array, key)).toBe(expected)
})

test('interpolationSearch([2, 6, 8, 14, 122, 169], 144) => -1', () => {
  const array = [2, 6, 8, 14, 122, 169]
  const key = 144
  const res = interpolationSearch(array, key)
  expect(res).toEqual(-1)
})

test('interpolationSearch([2, 6, 8, 14, 122, 169], 122) => 4', () => {
  const array = [2, 6, 8, 14, 122, 169]
  const key = 122
  const res = interpolationSearch(array, key)
  expect(res).toEqual(4)
})
