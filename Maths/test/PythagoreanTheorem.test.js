import * as pytheorem from "../PythagoreanTheorem"

test('Testing on hypothenuse calculation', () => {
  const hypothenuse = pytheorem.calcHypothenuse(2.0, 3.0)
  expect(hypothenuse).toBe(4.0)
})

test('Testing on other sides calculation', () => {
  const side = pytheorem.calcAdjacent(4.0, 3.0)
  expect(side).toBe(2.0)
})

test('Testing on other sides calculation', () => {
  const side = pytheorem.calcAdjacent(2.0, 4.0)
  expect(side).toBe('Length of side1 must be smaller than hypothenuse')
})

