import { memoizedCutRod } from "../RodCutting2";


test('Test Case 1', () => {
    expect(memoizedCutRod([1, 5, 8, 9, 10, 17, 17, 20], 8)).toBe(22)
  })
  
  test('Test Case 2', () => {
    expect(memoizedCutRod([1, 5, 4, 2, 1, 11, 19, 12], 8)).toBe(20)
  })
  
  test('Test Case 3', () => {
    expect(memoizedCutRod([1, 2, 1], 3)).toBe(3)
  })
  
  test('Test Case 4', () => {
    expect(memoizedCutRod([5, 4, 3, 2, 1], 5)).toBe(25)
  })
  
  test('Test Case 5', () => {
    expect(memoizedCutRod([3, 5, 8, 8, 10, 16, 14, 19], 8)).toBe(24)
  })