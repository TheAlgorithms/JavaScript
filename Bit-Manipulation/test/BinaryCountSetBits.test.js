import { BinaryCountSetBits } from '../BinaryCountSetBits'

test('check BinaryCountSetBits of 25 is 3', () => {
  const res = BinaryCountSetBits(25)
  expect(res).toBe(3)
})
test('check BinaryCountSetBits of 36 is 2', () => {
  const res = BinaryCountSetBits(36)
  expect(res).toBe(2)
})
test('check BinaryCountSetBits of 16 is 1', () => {
  const res = BinaryCountSetBits(16)
  expect(res).toBe(1)
})
test('check BinaryCountSetBits of 58 is 4', () => {
  const res = BinaryCountSetBits(58)
  expect(res).toBe(4)
})
test('check BinaryCountSetBits of 4294967295 is 32', () => {
  const res = BinaryCountSetBits(4294967295)
  expect(res).toBe(32)
})
test('check BinaryCountSetBits of 0 is 0', () => {
  const res = BinaryCountSetBits(0)
  expect(res).toBe(0)
})
test('check BinaryCountSetBits of 21.1 throws error', () => {
  expect(() => BinaryCountSetBits(21.1)).toThrow()
})
test('check BinaryCountSetBits of {} throws error', () => {
  expect(() => BinaryCountSetBits({})).toThrow()
})
