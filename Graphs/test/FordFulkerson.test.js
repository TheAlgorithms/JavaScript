import { fordFulkerson } from '../FordFulkerson.js'

test('Test Case 1', () => {
  const capacity = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0],
  ]
  const source = 0
  const sink = 5
  const maxFlow = fordFulkerson(capacity, source, sink)
  expect(maxFlow).toBe(23)
})

test('Test Case 2', () => {
  const capacity = [
    [0, 10, 0, 10, 0, 0],
    [0, 0, 5, 0, 15, 0],
    [0, 0, 0, 0, 10, 10],
    [0, 0, 10, 0, 0, 10],
    [0, 0, 0, 0, 0, 10],
    [0, 0, 0, 0, 0, 0],
  ]
  const source = 0
  const sink = 5
  const maxFlow = fordFulkerson(capacity, source, sink)
  expect(maxFlow).toBe(20)
})

test('Test Case 3', () => {
  const capacity = [
    [0, 7, 0, 0, 3, 0],
    [0, 0, 5, 0, 2, 0],
    [0, 0, 0, 8, 0, 7],
    [0, 0, 0, 0, 0, 5],
    [0, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]
  const source = 0
  const sink = 5
  const maxFlow = fordFulkerson(capacity, source, sink)
  expect(maxFlow).toBe(10)
})
