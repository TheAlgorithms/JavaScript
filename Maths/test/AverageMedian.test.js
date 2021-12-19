import { averageMedian } from '../AverageMedian'

test('should return the median of an array of numbers:', () => {
  const medianValue = averageMedian([1, 2, 6, 4, 5])
  expect(medianValue).toBe(4)
})

test('should return the median of an array of numbers:', () => {
  const medianValue = averageMedian([8, 9, 1, 2, 5, 10, 11])
  expect(medianValue).toBe(8)
})

test('should return the median of an array of numbers:', () => {
  const medianValue = averageMedian([15, 18, 3, 9, 13, 5])
  expect(medianValue).toBe(11)
})

test('should return the median of an array of numbers:', () => {
  const medianValue = averageMedian([1, 2, 3, 4, 6, 8])
  expect(medianValue).toBe(3.5)
})

test('shouldn`t change source array', () => {
  const sourceArray = [3, 2, 1, 4, 6, 8];
  averageMedian(sourceArray)
  expect(sourceArray).toEqual([3, 2, 1, 4, 6, 8]);
})