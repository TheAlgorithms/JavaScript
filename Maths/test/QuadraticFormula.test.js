import { quadraticFormula } from '../QuadraticFormula'

test('Testing on quadraticFormula', () => {
  const quadraticForm = quadraticFormula(1, -3, -4)
  expect(quadraticForm).toBe('the roots are X1=4 and X2=-1')
})

test('Testing on quadraticFormula', () => {
  const quadraticForm = quadraticFormula(1, 5, 6)
  expect(quadraticForm).toBe('the roots are X1=-2 and X2=-3')
})

test('Testing on quadraticFormula', () => {
  const quadraticForm = quadraticFormula(1, -3, 8)
  expect(quadraticForm).toBe('the roots do not exist or the roots are imaginary')
})

test('Testing on quadraticFormula', () => {
  const quadraticForm = quadraticFormula(1, -2, 9)
  expect(quadraticForm).toBe('the roots do not exist or the roots are imaginary')
})
