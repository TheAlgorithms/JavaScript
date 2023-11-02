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
    expect(() => generateSubSets('invalid')).toThrow(
      'Provided input is not an array'
    )
    expect(() =>
      generateSubSets([
        1, 2, 2, 1, 2, 3, 4, 3, 2, 3, 4, 3, 2, 2, 2, 3, 12, 11, 4, 2, 2, 2, 2,
        1, 2, 3, 5, 6, 7, 7, 8, 6, 5, 6, 7, 8, 9, 8, 0, 6
      ])
    ).toThrow('Error size should be less than equal to 32')
  })
})
