import { factorialize } from '../WhileLoopFactorial'

test('Testing on 3!', () => {
  expect(factorialize(3)).toBe(6)
})

test('Testing on 7!', () => {
  expect(factorialize(7)).toBe(5040)
})

test('Testing on 0!', () => {
  expect(factorialize(0)).toBe(1)
})

test('Testing on 12!', () => {
  expect(factorialize(12)).toBe(479001600)
})
