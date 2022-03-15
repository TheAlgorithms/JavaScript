import { sqrt } from '../SquareRoot'

test('Check SquareRoot of 4 is 2', () => {
  const res = sqrt(4, 10)
  expect(res).toBeCloseTo(2)
})

test('Check SquareRoot of 2 is 1.4142135', () => {
  const res = sqrt(2, 10)
  expect(res).toBeCloseTo(1.4142135)
})

test('Check SquareRoot of 3.2 is 1.788854381999832', () => {
  const res = sqrt(3.2, 10)
  expect(res).toBeCloseTo(1.788854381999832)
})

test('Check SquareRoot of 1 is 1', () => {
  const res = sqrt(1, 10)
  expect(res).toBe(1)
})

test('Check SquareRoot of 144 is 12', () => {
  const res = sqrt(144, 10)
  expect(res).toBeCloseTo(12)
})

test('Check SquareRoot of 0 is 0', () => {
  const res = sqrt(0, 10)
  expect(res).toBeCloseTo(0)
})

test('Check SquareRoot of 1000 is 31.62277', () => {
  const res = sqrt(1000, 10)
  expect(res).toBeCloseTo(31.62277)
})
