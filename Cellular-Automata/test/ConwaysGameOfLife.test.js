import { newGeneration } from '../ConwaysGameOfLife'

describe('newGeneration', () => {
  it('should produce the next generation according to the rules', () => {
    expect(
      newGeneration([
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
      ])
    ).toEqual([
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ])
  })
})
