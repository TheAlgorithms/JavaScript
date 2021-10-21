import { maxPathSum } from '../Problem018'

const example = `
3
7 4
2 4 6
8 5 9 3
`

describe('Check Problem 18 - Maximum path sum I', () => {
  it('Check example', () => {
    expect(maxPathSum(example)).toBe(23)
  })

  it('Check solution', () => {
    expect(maxPathSum()).toBe(1074)
  })
})
