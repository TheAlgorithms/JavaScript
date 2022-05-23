import {traverseDFS, searchDFS} from '../DepthFirstSearch'

describe('Depth first search', () => {
  const trees = [
    [
      { value: 6, left: 1, right: 2 },
      { value: 5, left: 3, right: 4 },
      { value: 7, left: 5, right: 6 },
      { value: 3, left: null, right: null },
      { value: 4, left: null, right: null },
      { value: 9, left: null, right: null},
      { value: 2, left: null, right: null }
    ], 
    [
      { value: 6, left: 1, right: 2 },
      { value: 5, left: null, right: 3 },
      { value: 7, left: 4, right: 5 },
      { value: 4, left: null, right: null },
      { value: 9, left: null, right: null},
      { value: 2, left: null, right: null }
    ], 
    [
      { value: 6, left: 1, right: 2 },
      { value: 5, left: 3, right: null },
      { value: 7, left: 4, right: 5 },
      { value: 3, left: null, right: null },
      { value: 9, left: null, right: null},
      { value: 2, left: null, right: null }
    ],
    [
      { value: 6, left: 1, right: 2 },
      { value: 5, left: null, right: null },
      { value: 7, left: 3, right: 4 },
      { value: 9, left: null, right: null},
      { value: 2, left: null, right: null }
    ],
  ]

  it('Traverse DFS', () => {
    const res1 = traverseDFS(trees[0]);
    expect(res1).toStrictEqual([6, 5, 7, 3, 4, 9, 2]);
    const res2 = traverseDFS(trees[1]);
    expect(res2).toStrictEqual([6, 5, 7, 4, 9, 2]);
    const res3 = traverseDFS(trees[2]);
    expect(res3).toStrictEqual([6, 5, 7, 3, 9, 2]);
    const res4 = traverseDFS(trees[3]);
    expect(res4).toStrictEqual([6, 5, 7, 9, 2]);
  })
})