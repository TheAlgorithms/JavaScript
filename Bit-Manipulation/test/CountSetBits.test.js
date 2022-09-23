import { CountSetBits } from '../CountSetBits'

test('check CountSetBits of 25 is 3', () => {
  const res = CountSetBits(25)
  expect(res).toBe(3)
})
test('check CountSetBits of 36 is 2', () => {
  const res = CountSetBits(36)
  expect(res).toBe(2)
})
test('check CountSetBits of 16 is 1', () => {
  const res = CountSetBits(16)
  expect(res).toBe(1)
})
test('check CountSetBits of 58 is 4', () => {
  const res = CountSetBits(58)
  expect(res).toBe(4)
})
test('check CountSetBits of 0 is 0', () => {
  const res = CountSetBits(0)
  expect(res).toBe(0)
})
