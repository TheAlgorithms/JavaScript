import { solveQuadraticEquation } from '../QuadraticFormula'

test('Quadratic Equation', () => {
  expect(solveQuadraticEquation(1, -3, -4)).toStrictEqual([4, -1])
  expect(solveQuadraticEquation(1, 5, 6)).toStrictEqual([-2, -3])
  expect(solveQuadraticEquation(3, 24, 48)).toStrictEqual([-4])
  expect(solveQuadraticEquation(1, -3, 8)).toStrictEqual([])
  expect(solveQuadraticEquation(1, -2, 9)).toStrictEqual([])
})
