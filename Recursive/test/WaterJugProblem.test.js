import { canMeasureWater } from '../WaterJugProblem'

describe('Water Jug Problem', () => {
  
  // Test case 1: Valid input where water can be measured
  it('should return true for values x=3, y=5, z=4', () => {
    expect(canMeasureWater(3, 5, 4)).toBe(true)
  })

  // Test case 2: Valid input where water cannot be measured
  it('should return false for values x=2, y=6, z=5', () => {
    expect(canMeasureWater(2, 6, 5)).toBe(false)
  })

  // Test case 3: Measure exact amount of water in one jug
  it('should return true for values x=5, y=3, z=5', () => {
    expect(canMeasureWater(5, 3, 5)).toBe(true)
  })

  // Test case 4: Invalid inputs (negative or non-integer)
  it('Throw Error for Invalid Input', () => {
    expect(() => canMeasureWater(-3, 5, 4)).toThrow(
      'Input should be non-negative whole numbers'
    )
    expect(() => canMeasureWater(3, null, 4)).toThrow(
      'Input should be non-negative whole numbers'
    )
    expect(() => canMeasureWater(3, 5, 2.5)).toThrow(
      'Input should be non-negative whole numbers'
    )
    expect(() => canMeasureWater('a', 5, 4)).toThrow(
      'Input should be non-negative whole numbers'
    )
  })

  // Test case 5: Edge case where z is 0
  it('should return true for values x=3, y=5, z=0', () => {
    expect(canMeasureWater(3, 5, 0)).toBe(true)
  })

  // Test case 6: Edge case where z equals the sum of both jugs
  it('should return true for values x=3, y=5, z=8', () => {
    expect(canMeasureWater(3, 5, 8)).toBe(true)
  })

})
