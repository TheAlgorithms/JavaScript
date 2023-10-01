import { quadraticRoots } from '../QuadraticRoots.js'

// Test case 1: Two real roots
test('returns an array with two real roots when the discriminant is positive', () => {
  expect(quadraticRoots(1, -3, 2)).toEqual([2, 1])
})

// Test case 2: One real root
test('returns an array with one real root when the discriminant is zero', () => {
  expect(quadraticRoots(1, -2, 1)).toEqual([1])
})

// Test case 3: No real roots
test('returns a message indicating no real roots when the discriminant is negative', () => {
  expect(quadraticRoots(1, 2, 5)).toEqual('No real roots')
})
