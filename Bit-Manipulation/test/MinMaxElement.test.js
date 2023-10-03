import { min, max } from '../minMaxElement'

test('Find max element from 5 and 3 :', () => {
  expect(max(5, 3)).toBe(5)
})

test('Find min element from 5 and 3 :', () => {
  expect(min(5, 3)).toBe(3)
})
