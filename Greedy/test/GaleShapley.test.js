import { expect, test } from 'vitest'
import { stableMatching } from '../GaleShapley'

test('Test Case 1', () => {
  const donorPref = [
    [0, 1, 3, 2],
    [0, 2, 3, 1],
    [1, 0, 2, 3],
    [0, 3, 1, 2]
  ]
  const recipientPref = [
    [3, 1, 2, 0],
    [3, 1, 0, 2],
    [0, 3, 1, 2],
    [1, 0, 3, 2]
  ]
  expect(stableMatching(donorPref, recipientPref)).toEqual([1, 2, 3, 0])
})
test('Test Case 2', () => {
  const donorPref = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
  ]
  const recipientPref = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
  ]
  expect(stableMatching(donorPref, recipientPref)).toEqual([0, 1, 2])
})
test('Test Case 3', () => {
  const donorPref = []
  const recipientPref = []
  expect(stableMatching(donorPref, recipientPref)).toEqual([])
})
