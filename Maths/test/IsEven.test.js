import { isEven, isEvenBitwise } from '../IsEven'

test('should return if the number is even or not', () => {
  const isEvenNumber = isEven(4)
  expect(isEvenNumber).toBe(true)
})

test('should return if the number is even or not', () => {
  const isEvenNumber = isEven(7)
  expect(isEvenNumber).toBe(false)
})

test('should return if the number is even or not', () => {
  const isEvenNumber = isEvenBitwise(6)
  expect(isEvenNumber).toBe(true)
})

test('should return if the number is even or not', () => {
  const isEvenNumber = isEvenBitwise(3)
  expect(isEvenNumber).toBe(false)
})
