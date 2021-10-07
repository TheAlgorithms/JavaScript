import { kadaneAlgo } from '../KadaneAlgo'
test('it is being checked that 15 is the answer to the corresponding array input', () => {
  expect(kadaneAlgo([1, 2, 3, 4, 5])).toBe(15)
})

test('it is being checked that 5 is the answer to the corresponding array input', () => {
  expect(kadaneAlgo([-1, -2, -3, -4, 5])).toBe(5)
})
