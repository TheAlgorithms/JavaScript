import { expect } from 'vitest'
import Square from '../Square'

const square = new Square(4)

// Using parseFloat() in case the side is a float
test('The perimeter of a square with a side of length equal to 4', () => {
  expect(parseFloat(square.perimeter().toFixed(2))).toEqual(16.0)
})

test('The area of a square with a side of length 4', () => {
  expect(parseFloat(square.area().toFixed(2))).toEqual(16.0)
})
