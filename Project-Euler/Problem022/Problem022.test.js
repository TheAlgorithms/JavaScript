import { describe, it, expect } from 'vitest'
import { calculateTotalNameScore, getAlphabeticalValue } from './Problem022'
const path = require('path')

describe('getAlphabeticalValue', () => {
  it('should return correct alphabetical value for COLIN', () => {
    const name = 'COLIN'
    const expectedValue = 3 + 15 + 12 + 9 + 14
    expect(getAlphabeticalValue(name)).toBe(expectedValue)
  })

  it('should return correct alphabetical value for A', () => {
    const name = 'A'
    const expectedValue = 1
    expect(getAlphabeticalValue(name)).toBe(expectedValue)
  })

  it('should return correct alphabetical value for Z', () => {
    const name = 'Z'
    const expectedValue = 26
    expect(getAlphabeticalValue(name)).toBe(expectedValue)
  })
})

describe('calculateTotalNameScore', () => {
  it('should correctly calculate the total name score', async () => {
    const namesFilePath = path.join(__dirname, 'Names.txt')
    const result = await calculateTotalNameScore(namesFilePath)

    const expectedScore = 4654143
    expect(result).toBe(expectedScore)
  })
})
