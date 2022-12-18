import { kosaraju } from '../Kosaraju.js'

test('Test Case 1', () => {
  const graph = [
    [1, 2],
    [2, 3],
    [3, 1],
    [2, 4],
    [4, 5],
    [5, 6],
    [6, 4]
  ]
  const stronglyConnectedComponents = kosaraju(graph)
  expect(stronglyConnectedComponents).toStrictEqual([
    [1, 3, 2],
    [4, 6, 5]
  ])
})

test('Test Case 2', () => {
  const graph = [
    [1, 2],
    [2, 3],
    [3, 1],
    [2, 4],
    [4, 5]
  ]
  const stronglyConnectedComponents = kosaraju(graph)
  expect(stronglyConnectedComponents).toStrictEqual([[1, 3, 2], [4], [5]])
})
