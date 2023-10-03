import { secondLargestElement } from '../FindSecondLargestElement'

test('The second largest element of the array [1, 2, 3, 4, 5] is 4', () => {
  const array = [1, 2, 3, 4, 5]
  const res = secondLargestElement(array)
  expect(res).toEqual(4)
})

test('The second largest element of the array [-1, -2, -3, -4, -5] is -2', () => {
  const array = [-1, -2, -3, -4, -5]
  const res = secondLargestElement(array)
  expect(res).toEqual(-2)
})
