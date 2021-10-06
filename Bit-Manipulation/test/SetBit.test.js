import { setBit } from '../SetBit'

test('Set bit number 0 in 1:', () => {
  const setBitPos = setBit(1, 0)
  expect(setBitPos).toBe(1)
})

test('Set bit number 0 in 2:', () => {
  const setBitPos = setBit(2, 0)
  expect(setBitPos).toBe(3)
})

test('Set bit number 1 in 10:', () => {
  const setBitPos = setBit(10, 1)
  expect(setBitPos).toBe(10)
})

test('Set bit number 2 in 10:', () => {
  const setBitPos = setBit(10, 2)
  expect(setBitPos).toBe(14)
})
