import { problem44 } from '../Problem044.js'

describe('Project Euler 044 - Pentagon numbers', () => {
  test('should be invalid input if number is negative', () => {
    expect(() => problem44(-3)).toThrowError('Invalid Input')
  })

  test('should be invalid input if number is 0', () => {
    expect(() => problem44(0)).toThrowError('Invalid Input')
  })

  test('solves the problem', () => {
    expect(problem44(1)).toBe(5482660)
  })
})
