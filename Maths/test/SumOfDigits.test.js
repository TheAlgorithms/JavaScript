import {
  sumOfDigitsUsingLoop,
  sumOfDigitsUsingRecursion,
  sumOfDigitsUsingString
} from '../SumOfDigits'

test('Testing on sumOfDigitsUsingLoop', () => {
  const sum = sumOfDigitsUsingLoop(123)
  expect(sum).toBe(6)
})

test('Testing on sumOfDigitsUsingRecursion', () => {
  const sum = sumOfDigitsUsingRecursion(123)
  expect(sum).toBe(6)
})

test('Testing on sumOfDigitsUsingString', () => {
  const sum = sumOfDigitsUsingString(123)
  expect(sum).toBe(6)
})
