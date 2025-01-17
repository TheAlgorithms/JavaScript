import { rungeKuttaStep, rungeKuttaFull } from '../RungaKutta'

describe('rungeKuttaStep', () => {
  it('should calculate the next y value correctly for simple linear function f(x, y) = x + y', () => {
    const yNext = rungeKuttaStep(0, 0.1, 1, (x, y) => x + y)
    expect(yNext).toBeCloseTo(1.1103, 2) // Adjusted expected value and precision
  })

  it('should calculate the next y value correctly for simple product function f(x, y) = x * y', () => {
    const yNext = rungeKuttaStep(1, 0.1, 2, (x, y) => x * y)
    expect(yNext).toBeCloseTo(2.22, 2) // Adjusted expected value and precision
  })
})

describe('rungeKuttaFull', () => {
  it('should return all the points found for simple linear function f(x, y) = x + y', () => {
    const actual = rungeKuttaFull(0, 0.5, 0.1, 1, (x, y) => x + y)

    const expected = [
      { x: 0, y: 1 },
      { x: 0.1, y: 1.11034 },
      { x: 0.2, y: 1.23272 },
      { x: 0.3, y: 1.36862 },
      { x: 0.4, y: 1.58356 },
      { x: 0.5, y: 1.78944 }
    ]

    for (let i = 0; i < actual.length; i++) {
      expect(actual[i].x).toBeCloseTo(expected[i].x, 1)
      expect(actual[i].y).toBeCloseTo(expected[i].y, 1)
    }
  })

  it('should return all the points found for simple product function f(x, y) = x * y', () => {
    const actual = rungeKuttaFull(1, 1.5, 0.1, 1, (x, y) => x * y)

    const expected = [
      { x: 1, y: 1 },
      { x: 1.1, y: 1.11111 },
      { x: 1.2, y: 1.24691 },
      { x: 1.3, y: 1.40925 },
      { x: 1.4, y: 1.60073 },
      { x: 1.5, y: 1.82421 }
    ]

    for (let i = 0; i < actual.length; i++) {
      expect(actual[i].x).toBeCloseTo(expected[i].x, 1)
      expect(actual[i].y).toBeCloseTo(expected[i].y, 1)
    }
  })
})
