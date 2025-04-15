import { TarjanSCC } from '../TarjanSCC.js'

test('Test Case 1 - Simple graph with two SCCs', () => {
  const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: []
  }
  const result = TarjanSCC(graph)

  // Sort the components before comparison since order doesn't matter
  const expected = [[4], [3], [0, 2, 1]].map((comp) => comp.sort())
  const actual = result.map((comp) => comp.sort())

  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('Test Case 2 - All nodes in one SCC', () => {
  const graph = {
    A: ['B'],
    B: ['C'],
    C: ['A']
  }

  const result = TarjanSCC(graph)

  // Sort the components before comparison since order doesn't matter
  const expected = [['A', 'B', 'C']].map((comp) => comp.sort())
  const actual = result.map((comp) => comp.sort())

  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('Test Case 3 - Disconnected nodes', () => {
  const graph = {
    1: [],
    2: [],
    3: []
  }

  const result = TarjanSCC(graph)

  // Sort the components before comparison since order doesn't matter
  const expected = [[1], [2], [3]].map((comp) => comp.sort())
  const actual = result.map((comp) => comp.sort())

  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('Test Case 4 - Complex Graph', () => {
  const graph = {
    0: [1],
    1: [2, 3],
    2: [0],
    3: [4],
    4: [5],
    5: [3]
  }

  const result = TarjanSCC(graph)

  // Sort the components before comparison since order doesn't matter
  const expected = [
    [0, 2, 1],
    [3, 5, 4]
  ].map((comp) => comp.sort())
  const actual = result.map((comp) => comp.sort())

  expect(actual).toEqual(expect.arrayContaining(expected))
})
