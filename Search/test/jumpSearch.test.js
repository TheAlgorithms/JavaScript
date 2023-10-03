import { jumpSearch } from '../JumpSearch'

test('jumpSearch([0, 0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90], 77) => 10', () => {
  const arr = [0, 0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90]
  const res = jumpSearch(arr, 77)
  expect(res).toEqual(10)
})

test('jumpSearch([11, 12, 15, 65, 78, 90], 4) => -1', () => {
  const arr = [11, 12, 15, 65, 78, 90]
  const res = jumpSearch(arr, 4)
  expect(res).toEqual(-1)
})

test('jumpSearch([11, 12, 15, 65, 78, 90], 11) => 0', () => {
  const arr = [11, 12, 15, 65, 78, 90]
  const res = jumpSearch(arr, 11)
  expect(res).toEqual(0)
})
