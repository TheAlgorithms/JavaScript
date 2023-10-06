import { secondLargestElement } from '../FindSecondLargestElement'

test('The second largest element of the array [100, 200, 300, 400] is 300', () => {
  const array = [100, 200, 300, 400]
  const res = secondLargestElement(array)
  expect(res).toBe(300)
})

test('The second largest element of the array [1100, 2400, 1300, 4002] is 2400', () => {
  const array = [1100, 2400, 1300, 4002]
  const res = secondLargestElement(array)
  expect(res).toBe(2400)
})

test('The second largest element of the array [10, 20, 39, 34] is 34', () => {
  const array = [10, 20, 39, 34]
  const res = secondLargestElement(array)
  expect(res).toBe(34)
})

test('The second largest element of the array [1, 20, 3, 40] is 20', () => {
  const array = [1, 20, 3, 40]
  const res = secondLargestElement(array)
  expect(res).toBe(20)
})
