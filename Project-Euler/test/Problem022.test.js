import * as path from 'path'
import { namesScores } from '../Problem022.js'

describe('checking Names Scores', () => {
  // Project Euler Names Scores
  test('Test Names Scores', () => {
    expect(namesScores(path.resolve('./Project-Euler/test/Problem022.txt'))).toBe(871198282)
  })
})
