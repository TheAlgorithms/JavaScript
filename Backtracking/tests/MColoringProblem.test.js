import { MColoring } from '../MColoringProblem';

describe('MColoringProblem', () => {
  it('should color a triangle with 3 colors', () => {
    const graph = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0]
    ];
    const test1 = new MColoring(graph, 3);
    const solution = test1.getSolution();
    expect(solution).not.toEqual([]);
  });

  it('should not color a triangle with 2 colors', () => {
    const graph = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0]
    ];
    const test2 = new MColoring(graph, 2);
    const solution = test2.getSolution();
    expect(solution).toEqual([]);
  });
});
