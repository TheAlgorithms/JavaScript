import { sumUsingLoop, sumUsingReduce } from '../SumOfListOfNumbers.js'

describe('sumUsingLoop', () => {
  it('with a list of numbers', () => {
    const sumOfNaturalNumbers = sumUsingLoop([3.45, 7.1, -3.003, 6, -12.567, -567])
    expect(sumOfNaturalNumbers).toBe(-566.02)
  })
})

describe('sumUsingReduce', () => {
  it('with a list of numbers', () => {
    const sumOfNaturalNumbers = sumUsingReduce([3.45, 7.1, -3.003, 6, -12.567, -567])
    expect(sumOfNaturalNumbers).toBe(-566.02)
  })
})
