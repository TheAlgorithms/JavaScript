import { ArticulationPointsFinder } from '../ArticulationPoint.js';

test('Test Case 1', () => {
  const apFinder = new ArticulationPointsFinder();
  const V = 6;
  const E = 7;
  const graph = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [5, 4],
    [3, 4],
  ];
  const articulationPoints = apFinder.findArticulationPoints(V, graph);
  expect(articulationPoints).toEqual([1, 4]);
});