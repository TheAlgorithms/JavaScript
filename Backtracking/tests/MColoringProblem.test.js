import { mColoring } from '../MColoringProblem'

describe('MColoringProblem', () => {
  it('should color a triangle with 3 colors', () => {
    const graph = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0]
    ]
    const solution = mColoring(graph, 3)
    expect(solution).not.toBeNull()
  })

  it('should not color a triangle with 2 colors', () => {
    const graph = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0]
    ]
    const solution = mColoring(graph, 2)
    expect(solution).toBeNull()
  })
})
