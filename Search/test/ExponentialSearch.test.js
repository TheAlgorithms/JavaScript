import { exponentialSearch } from '../ExponentialSearch'

test('The Exponential Search of the Array [2, 3, 4, 10, 40, 65, 78, 100] is 6 where the value = 78', () => {
  const arr = [2, 3, 4, 10, 40, 65, 78, 100]
  const value = 78
  const result = exponentialSearch(arr, arr.length, value)
  expect(result).toEqual(6)
})

test('The Exponential Search of the Array [2, 3, 4, 10, 40, 65, 78, 100] is -1 where the value = 178', () => {
  const arr = [2, 3, 4, 10, 40, 65, 78, 100]
  const value = 178
  const result = exponentialSearch(arr, arr.length, value)
  expect(result).toEqual(-1)
})
