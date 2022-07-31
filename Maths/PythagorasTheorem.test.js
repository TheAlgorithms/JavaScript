import * as pytheorem from "../PythagorasTheorem"

test('Testing on hypothenuse calculation', () => {
  const hypothenuse = pytheorem.calcHypothenuse(2.0, 3.0)
  expect(hypothenuse).toBe(4.0)
})

test('Testing on adjacent calculation', () => {
  const adjacent = pytheorem.calcAdjacent(4.0, 3.0)
  expect(adjacent).toBe(2.0)
})

test('Testing on adjacent calculation', () => {
  const adjacent = pytheorem.calcAdjacent(2.0, 4.0)
  expect(adjacent).toBe('Length of adjacent must be smaller than hypothenuse')
})

test('Testing on base calculation', () => {
  const base = pytheorem.calcHypothenuse(4.0, 2.0)
  expect(hypothenuse).toBe(3.0)
})

test('Testing on base calculation', () => {
  const base = pytheorem.calcHypothenuse(3.0, 4.0)
  expect(hypothenuse).toBe('Length of base must be smaller than hypothenuse')
})

