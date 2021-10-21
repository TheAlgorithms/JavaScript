import { IsPowerOfTwo } from '../IsPowerOfTwo'

test('Check if 0 is a power of 2 or not:', () => {
  const res = IsPowerOfTwo(0)
  expect(res).toBe(false)
})

test('Check if 1 is a power of 2 or not:', () => {
  const res = IsPowerOfTwo(1)
  expect(res).toBe(true)
})

test('Check if 4 is a power of 2 or not:', () => {
  const res = IsPowerOfTwo(4)
  expect(res).toBe(true)
})

test('Check if 1024 is a power of 2 or not:', () => {
  const res = IsPowerOfTwo(1024)
  expect(res).toBe(true)
})

test('Check if 1025 is a power of 2 or not:', () => {
  const res = IsPowerOfTwo(1025)
  expect(res).toBe(false)
})
