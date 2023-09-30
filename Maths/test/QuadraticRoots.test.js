import { quadraticRoots } from '../QuadraticRoots.js'

// Test case 1: Two real roots
test('should return an array with two real roots when the discriminant is positive', () => {
  const roots = quadraticRoots(1, -3, 2)
  expect(roots).toEqual([2, 1])
})

// Test case 2: One real root
test('should return an array with one real root when the discriminant is zero', () => {
  const roots = quadraticRoots(1, -2, 1)
  expect(roots).toEqual([1])
})

// Test case 3: No real roots
test('should return a message indicating no real roots when the discriminant is negative', () => {
  const roots = quadraticRoots(1, 2, 5)
  expect(roots).toEqual('No real roots')
})
