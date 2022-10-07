import { cbrt } from '../CubeRoot'

test('Check CubeRoot of 8 is 2', () => {
  const res = cbrt(8)
  expect(res).toBeCloseTo(2)
})

test('Check CubeRoot of 512 is 8', () => {
  const res = cbrt(512)
  expect(res).toBeCloseTo(8)
})

test('Check CubeRoot of 3 is 1.44224957031', () => {
  const res = cbrt(3)
  expect(res).toBeCloseTo(1.44224957031)
})

test('Check CubeRoot of 1 is 1', () => {
  const res = cbrt(1)
  expect(res).toBe(1)
})

test('Check CubeRoot of 6.6 is 1.87577745537', () => {
  const res = cbrt(6.6)
  expect(res).toBeCloseTo(1.87577745537)
})