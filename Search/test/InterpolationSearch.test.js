import { interpolationSearch } from '../InterpolationSearch'

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
