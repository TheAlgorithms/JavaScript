import { expect } from 'vitest'
import { generateSubSets } from '../GenerateSubSets'

describe('subSets', () => {
  it('find the subsets', () => {
    expect(generateSubSets([1, 2, 3])).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3]
    ])
    expect(generateSubSets([1, 2])).toEqual([[], [1], [2], [1, 2]])
  })
})
