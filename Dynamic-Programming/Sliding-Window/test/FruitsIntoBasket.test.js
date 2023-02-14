import { totalFruit } from '../FruitsIntoBasket'

test('generate all valid parentheses of input n', () => {
  expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toStrictEqual(5)
})
