import { findRoot } from '../BisectionMethod'

test('Equation f(x) = x^2 - 3*x + 2 = 0, has root x = 1 in [a, b] = [0, 1.5]', () => {
  const root = findRoot(0, 1.5, (x) => x ** 2 - 3 * x + 2, 8)
  expect(root).toBe(0.9990234375)
})

test('Equation f(x) = ln(x) + sqrt(x) + π*x^2 = 0, has root x = 0.36247037 in [a, b] = [0, 10]', () => {
  const root = findRoot(
    0,
    10,
    (x) => {
      return Math.log(x) + Math.sqrt(x) + Math.PI * Math.pow(x, 2)
    },
    32
  )
  expect(Number(Number(root).toPrecision(8))).toBe(0.36247037)
})

test('Equation f(x) = sqrt(x) + e^(2*x) - 8*x = 0, has root x = 0.93945851 in [a, b] = [0.5, 100]', () => {
  const root = findRoot(
    0.5,
    100,
    (x) => {
      return Math.exp(2 * x) + Math.sqrt(x) - 8 * x
    },
    32
  )
  expect(Number(Number(root).toPrecision(8))).toBe(0.93945851)
})

test('Equation f(x) = x^3 = 0, has root x = 0.0 in [a, b] = [-1.0, 1.0]', () => {
  const root = findRoot(-1.0, 1.0, (x) => x ** 3, 32)
  expect(root).toBeCloseTo(0.0, 5)
})

test('Throws an error when function does not change sign', () => {
  expect(() => findRoot(-1.0, 1.0, (x) => x ** 2, 10)).toThrowError()
})
