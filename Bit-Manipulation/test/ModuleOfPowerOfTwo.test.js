import { ModuleOfPowerOfTwo } from '../ModuleOfPowerOfTwo'

test('Check 7 module 4', () => {
  const res = ModuleOfPowerOfTwo(7, 4)
  expect(res).toBe(3)
})

test('Check 150 module 4', () => {
  const res = ModuleOfPowerOfTwo(150, 4)
  expect(res).toBe(2)
})

test('Check 155 module 2', () => {
  const res = ModuleOfPowerOfTwo(155, 2)
  expect(res).toBe(1)
})

test('Check 150 module 16', () => {
  const res = ModuleOfPowerOfTwo(150, 16)
  expect(res).toBe(6)
})

test('Check 6 module 4', () => {
  const res = ModuleOfPowerOfTwo(6, 4)
  expect(res).toBe(2)
})

test('Check 12 module 8', () => {
  const res = ModuleOfPowerOfTwo(12, 8)
  expect(res).toBe(4)
})

test('Check 10 module 2', () => {
  const res = ModuleOfPowerOfTwo(10, 2)
  expect(res).toBe(0)
})
