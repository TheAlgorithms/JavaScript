import { standardDeviation } from '../StandardDeviation.js'

test('Calculate STD of 3,5,6,10,23,12,19', () => {
  expect(standardDeviation([3, 5, 6, 10, 23, 12, 19])).toBeCloseTo(
    6.9164105353773
  )
})

test('Calculate STD of -2,-5,1,12,23,-81,-23', () => {
  expect(standardDeviation([-2, -5, 1, 12, 23, -81, -23])).toBeCloseTo(
    31.598889156399
  )
})

test('Calculate STD of 0,0,0', () => {
  expect(standardDeviation([0, 0, 0])).toBeCloseTo(0)
})

test('Calculate STD of -7,7', () => {
  expect(standardDeviation([-7, 7])).toBeCloseTo(7)
})

test('Throw error - array has less than two items', () => {
  expect(() => standardDeviation([])).toThrow()
  expect(() => standardDeviation([7])).toThrow()
})

test('Throw type error - not an array', () => {
  expect(() => standardDeviation(2)).toThrow()
  expect(() => standardDeviation('not an array')).toThrow()
})

test('Throw type error - not a number inside array', () => {
  expect(() => standardDeviation([5, 'not a number', 2])).toThrow()
  expect(() => standardDeviation([1, [2], 3])).toThrow()
})
