import { ternarySearchRecursive, ternarySearchIterative } from '../TernarySearch'

test('should return the index of a number in an array of numbers:', () => {
  const indexNumber = ternarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
  expect(indexNumber).toBe(2)
})

test('should return the index of a number in an array of numbers:', () => {
  const indexNumber = ternarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)
  expect(indexNumber).toBe(7)
})

test('should return the index of a number in an array of numbers:', () => {
  const indexNumber = ternarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)
  expect(indexNumber).toBe(-1)
})

test('should return the index of a number in an array of numbers:', () => {
  const indexNumber = ternarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12)
  expect(indexNumber).toBe(-1)
})

test('should return the index of a string in an array of strings:', () => {
  const indexNumber = ternarySearchRecursive(['Ali', 'Cathrynli', 'Josuke', 'Thomas'], 'Cathrynli')
  expect(indexNumber).toBe(1)
})

test('should return the index of a string in an array of strings:', () => {
  const indexNumber = ternarySearchRecursive(['Ali', 'Cathrynli', 'Josuke', 'Thomas'], 'Josuke')
  expect(indexNumber).toBe(2)
})

test('should return the index of a string in an array of strings:', () => {
  const indexNumber = ternarySearchRecursive(['Ali', 'Cathrynli', 'Josuke', 'Thomas'], 'Angela')
  expect(indexNumber).toBe(-1)
})
