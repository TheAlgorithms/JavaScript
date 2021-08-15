import { change, coinChangeMin } from '../CoinChange'

test('Base Case 1', () => {
  const coins = [2, 3, 5]
  const amount = 0
  expect(change(coins, amount)).toBe(1)
  expect(coinChangeMin(coins, amount)).toBe(0)
})
test('Base Case 2', () => {
  const coins = []
  const amount = 100
  expect(change(coins, amount)).toBe(0)
  expect(coinChangeMin(coins, amount)).toBe(-1)
})
test('Test Case 1', () => {
  const coins = [2, 4, 5]
  const amount = 12
  expect(change(coins, amount)).toBe(5)
  expect(coinChangeMin(coins, amount)).toBe(3)
})
test('Test Case 2', () => {
  const coins = [5, 2, 3, 7, 6, 1, 12, 11, 9, 15]
  const amount = 45
  expect(change(coins, amount)).toBe(12372)
  expect(coinChangeMin(coins, amount)).toBe(3)
})
test('Test Case 3', () => {
  const coins = [2]
  const amount = 3
  expect(change(coins, amount)).toBe(0)
  expect(coinChangeMin(coins, amount)).toBe(-1)
})
test('Test Case 4', () => {
  const coins = [3, 5, 7, 8, 9, 10, 11]
  const amount = 500
  expect(change(coins, amount)).toBe(35502874)
  expect(coinChangeMin(coins, amount)).toBe(46)
})
test('Test Case 5', () => {
  const coins = [10]
  const amount = 10
  expect(change(coins, amount)).toBe(1)
  expect(coinChangeMin(coins, amount)).toBe(1)
})
