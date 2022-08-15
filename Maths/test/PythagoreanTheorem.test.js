import * as pytheorem from '../PythagoreanTheorem'

test('Testing on hypothenuse calculation', () => {
  const hypothenuse = pytheorem.calcHypothenuse(6.0, 8.0)
  expect(hypothenuse).toBe(10.0)
})

test('Testing on other sides calculation', () => {
  const side = pytheorem.calcOtherSide(10.0, 6.0)
  expect(side).toBe(8.0)
})

test('Testing on other sides calculation', () => {
  const side = pytheorem.calcOtherSide(6.0, 10.0)
  expect(side).toBe('Length of side1 must be smaller than hypothenuse')
})
