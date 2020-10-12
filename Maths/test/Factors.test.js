import { factorsOfANumber } from '../Factors'

describe('Factors', () => {
  factorsOfANumber(50).forEach((num) => {
    it(`${num} is a factor of 50`, () => {
      const isFactor = 50 % num === 0
      expect(isFactor).toBeTruthy()
    })
  })
})
