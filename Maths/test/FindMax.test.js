import { findMax } from '../FindMax'

test('Should return the highest number in the array', () => {
    const max = findMax([2,5,1,12,43,1,9])
    expect(max).toBe(43)
  })

test('Should return the highest number in the array', () => {
    const max = findMax([21,513,6])
    expect(max).toBe(513)
  })

test('Should return the highest number in the array', () => {
    const max = findMax([])
    expect(max).toBe('Array is empty')
  })
  