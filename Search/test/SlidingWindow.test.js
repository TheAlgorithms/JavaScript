import { slidingWindow } from '../SlidingWindow'

test('expect to return the largest sum of sequence in the array', () => {
  const sum = slidingWindow([1, 2, 5, 2, 8, 1, 5], 2)
  expect(sum).toBe(10)
})

test('expect to return the largest sum of sequence in the array', () => {
  const sum = slidingWindow([5, 2, 6, 9], 3)
  expect(sum).toBe(17)
})

test('expect to return null when the sequence size is larger then the array length', () => {
  const sum = slidingWindow([1, 2, 5, 2, 8, 1, 5], 15)
  expect(sum).toBe(null)
})
