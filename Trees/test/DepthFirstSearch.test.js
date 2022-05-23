import {traverseDFS, searchDFS} from '../DepthFirstSearch'

describe('Depth first search', () => {
  const tree = [
    { value: 6, left: 1, right: 2 },
    { value: 5, left: 3, right: 4 },
    { value: 7, left: 5, right: 6 },
    { value: 3, left: null, right: null },
    { value: 4, left: null, right: null },
    { value: 9, left: null, right: null},
    { value: 2, left: null, right: null }
  ]

  it('Search DFS', () => {
    const node1 = searchDFS(tree, 6);
    expect(node1.value).toBe(6);
    const node2 = searchDFS(tree, 5);
    expect(node2.value).toBe(5);
  })
})