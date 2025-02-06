import { totalFruit } from '../FruitsIntoBasket'

test('result : ', () => {
  expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toStrictEqual(5)
  expect(totalFruit([5, 3, 3, 1, 2])).toStrictEqual(3)
  expect(totalFruit([9, 1, 2, 2, 2])).toStrictEqual(4)
  expect(totalFruit([3, 3, 3])).toStrictEqual(3)
  expect(totalFruit([])).toStrictEqual(0)
})
