import { integralEvaluation } from '../MidpointIntegration'

test('Should return the integral of f(x) = sqrt(x) in [1, 3] to be equal 2.797434', () => {
  const result = integralEvaluation(10000, 1, 3, (x) => { return Math.sqrt(x) })
  expect(Number(result.toPrecision(6))).toBe(2.79743)
})

test('Should return the integral of f(x) = sqrt(x) + x^2 in [1, 3] to be equal 11.46410161', () => {
  const result = integralEvaluation(10000, 1, 3, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })
  expect(Number(result.toPrecision(10))).toBe(11.46410161)
})

test('Should return the integral of f(x) = log(x) + Pi*x^3 in [5, 12] to be equal 15809.9141543', () => {
  const result = integralEvaluation(20000, 5, 12, (x) => { return Math.log(x) + Math.PI * Math.pow(x, 3) })
  expect(Number(result.toPrecision(10))).toBe(15809.91415)
})
