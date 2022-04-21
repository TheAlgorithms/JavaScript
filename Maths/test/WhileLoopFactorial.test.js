import { factorialize } from '../WhileLoopFactorial'

test('Testing on 3!', () => {
  const three_factorial = factorialize(3)
  expect(three_factorial).toBe(6)
})

test('Testing on 7!', () => {
  const seven_factorial = factorialize(7)
  expect(seven_factorial).toBe(5040)
})

test('Testing on 0!', () => {
  const zero_factorial = factorialize(0)
  expect(zero_factorial).toBe(1)
})

test('Testing on 12!', () => {
  const twelve_factorial = factorialize(12)
  expect(twelve_factorial).toBe(479001600)
})
