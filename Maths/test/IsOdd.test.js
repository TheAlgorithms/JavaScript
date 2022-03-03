import { isOdd, isOddBitwise } from '../IsOdd'

test('should return if the number is even or not', () => {
  const isEvenNumber = isOdd(4)
  expect(isEvenNumber).toBe(false)
})

test('should return if the number is even or not', () => {
  const isEvenNumber = isOdd(7)
  expect(isEvenNumber).toBe(true)
})

test('should return if the number is even or not', () => {
  const isEvenNumber = isOddBitwise(6)
  expect(isEvenNumber).toBe(false)
})

test('should return if the number is even or not', () => {
  const isEvenNumber = isOddBitwise(3)
  expect(isEvenNumber).toBe(true)
})
