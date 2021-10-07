import { eulerFull, eulerStep } from '../EulerMethod'

describe('eulerStep', () => {
  it('should calculate the next y value correctly', () => {
    expect(eulerStep(0, 0.1, 0, function (x, y) { return x })).toBe(0)
    expect(eulerStep(2, 1, 1, function (x, y) { return x * x })).toBe(5)
  })
})

describe('eulerFull', () => {
  it('should return all the points found', () => {
    expect(eulerFull(0, 3, 1, 0, function (x, y) { return x }))
      .toEqual([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 1 }, { x: 3, y: 3 }])

    expect(eulerFull(3, 4, 0.5, 1, function (x, y) { return x * x }))
      .toEqual([{ x: 3, y: 1 }, { x: 3.5, y: 5.5 }, { x: 4, y: 11.625 }])
  })
})
