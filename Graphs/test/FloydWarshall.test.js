import { FloydWarshall } from '../FloydWarshall.js'

test('FloydWarshall computes all-pairs shortest paths', () => {
  const INF = Infinity
  const dist = [
    [0, 1, 2, INF],
    [1, 0, INF, INF],
    [2, INF, 0, 1],
    [INF, INF, 1, 0]
  ]

  const out = FloydWarshall(dist)
  expect(out).toEqual([
    [0, 1, 2, 3],
    [1, 0, 3, 4],
    [2, 3, 0, 1],
    [3, 4, 1, 0]
  ])
})
