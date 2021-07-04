import { setBit } from '../SetBit'

test('should set bit at the given bit Position', () => {
  const setBitPos = setBit(1, 0)
  expect(setBitPos).toBe(1)
})

test('should set bit at the given bit Position', () => {
  const setBitPos = setBit(1, 0)
  expect(setBitPos).toBe(1)
})

test('should set bit at the given bit Position', () => {
  const setBitPos = setBit(10, 1)
  expect(setBitPos).toBe(10)
})

test('should set bit at the given bit Position', () => {
  const setBitPos = setBit(10, 2)
  expect(setBitPos).toBe(14)
})
