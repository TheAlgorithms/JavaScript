import { sumUsingLoop, sumUsingReduce } from "../SumOfListOfNumbers.js";

describe('sumUsingLoop', () => {
    it('with a list of integers', () => {
      const sumOfNaturalNumbers = sumUsingLoop([5,7,-3,6,97,4])
      expect(sumOfNaturalNumbers).toBe(116)
    })
  })

describe('sumUsingLoop', () => {
    it('with a list of non-integers', () => {
      const sumOfNaturalNumbers = sumUsingLoop([3.45,7.1,-3.003,6.0,-12.567,-567.0])
      expect(sumOfNaturalNumbers).toBe(-566.02)
    })
  })

describe('sumUsingReduce', () => {
    it('with a list of integers', () => {
      const sumOfNaturalNumbers = sumUsingLoop([5,7,-3,6,97,4])
      expect(sumOfNaturalNumbers).toBe(116)
    })
  })

  describe('sumUsingReduce', () => {
    it('with a list of non-integers', () => {
      const sumOfNaturalNumbers = sumUsingLoop([3.45,7.1,-3.003,6.0,-12.567,-567.0])
      expect(sumOfNaturalNumbers).toBe(-566.02)
    })
  })