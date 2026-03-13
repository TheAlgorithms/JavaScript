import { averageMode } from '../AverageMode'

test('should return the mode of an array of numbers:', () => {
  const mode = averageMode([1, 2, 6, 4, 5])
  expect(mode).toEqual([1, 2, 4, 5, 6])
})

test('should return the mode of an array of numbers:', () => {
  const mode = averageMode([2, 3, 4, 5, 3, 4, 2, 5, 2, 2, 4, 2, 2, 2])
  expect(mode).toEqual([2])
})

test('should return the mode of an array of numbers:', () => {
  const mode = averageMode(['x', 'x' , 'y', 'y', 'z'])
  expect(mode).toEqual(['x', 'y'])
})

test('should return the mode of an array of numbers:', () => {
  const mode = averageMode([3, 4, 5, 3, 4, 2, 5, 2, 2, 4, 4, 4, 2, 2, 4, 2])
  expect(mode).toEqual([2, 4])
})
