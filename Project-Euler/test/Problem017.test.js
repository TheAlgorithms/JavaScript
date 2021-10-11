import { countNumberLetter } from '../Problem017'

describe('checkCountNumberLetter', () => {
  it('Solves the problem statement example', () => {
    const numberLetter = countNumberLetter(1000)
    expect(numberLetter).toBe(21124)
  })

  it('Returns first five numbers count', () => {
    const numberLetter = countNumberLetter(5)
    expect(numberLetter).toBe(19)
  })
})
