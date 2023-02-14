import { totalFruit } from '../FruitsIntoBasket'

test('result : ', () => {
  expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toStrictEqual(5)
})
