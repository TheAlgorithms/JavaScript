import {averageMode} from '../AverageMode'

describe('Testing Average Mode', () => {
  it('with only one result', () => {
    expect(averageMode([13,35,31,23,23,23,52,13,10])).toBe(23)
  })
})

describe('Testing Average Mode', () => {
  it('with more than one result', () => {
    expect(averageMode([10,10,52,32,52,1623,1,5,5])).toStrictEqual([5,10,52])
  })
})
