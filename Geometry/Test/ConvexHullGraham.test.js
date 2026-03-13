import { describe, it, expect } from 'vitest'
import { convexHull } from '../ConvexHullGraham'

describe('ConvexHull', () => {
  it('should throw RangeError for fewer than 3 points', () => {
    expect(() => convexHull([])).toThrow(RangeError)
    expect(() => convexHull([{ x: 0, y: 0 }])).toThrow(RangeError)
    expect(() =>
      convexHull([
        { x: 0, y: 0 },
        { x: 1, y: 1 }
      ])
    ).toThrow(RangeError)
  })

  it('should handle exactly 3 points forming a triangle', () => {
    const points = [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 2, y: 3 }
    ]
    const result = convexHull(points)
    expect(result).toHaveLength(3)
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ x: 0, y: 0 }),
        expect.objectContaining({ x: 4, y: 0 }),
        expect.objectContaining({ x: 2, y: 3 })
      ])
    )
  })

  it('should handle collinear points', () => {
    const points = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 }
    ]
    const result = convexHull(points)
    expect(result).toHaveLength(2)
    expect(result).toContainEqual({ x: 0, y: 0 })
    expect(result).toContainEqual({ x: 2, y: 2 })
  })

  it('should compute convex hull for square with interior point', () => {
    const points = [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 4 },
      { x: 0, y: 4 },
      { x: 2, y: 2 }
    ]
    const result = convexHull(points)
    expect(result).toHaveLength(4)
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ x: 0, y: 0 }),
        expect.objectContaining({ x: 4, y: 0 }),
        expect.objectContaining({ x: 4, y: 4 }),
        expect.objectContaining({ x: 0, y: 4 })
      ])
    )
    expect(result).not.toContainEqual({ x: 2, y: 2 })
  })

  it('should handle points with same x-coordinate (vertical line)', () => {
    const points = [
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 0, y: 1 },
      { x: 4, y: 1 }
    ]
    const result = convexHull(points)
    expect(result.length).toBeGreaterThanOrEqual(3)
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ x: 0, y: 1 }),
        expect.objectContaining({ x: 2, y: 0 }),
        expect.objectContaining({ x: 4, y: 1 }),
        expect.objectContaining({ x: 2, y: 2 })
      ])
    )
  })

  it('should handle points with same y-coordinate (horizontal line)', () => {
    const points = [
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 1, y: 0 },
      { x: 1, y: 4 }
    ]
    const result = convexHull(points)
    expect(result.length).toBeGreaterThanOrEqual(3)
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ x: 0, y: 2 }),
        expect.objectContaining({ x: 2, y: 2 })
      ])
    )
  })

  it('should compute convex hull for Wikipedia example', () => {
    const points = [
      { x: 0, y: 3 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 4, y: 4 },
      { x: 0, y: 0 },
      { x: 1, y: 2 },
      { x: 3, y: 1 },
      { x: 3, y: 3 }
    ]
    const result = convexHull(points)
    expect(result).toContainEqual({ x: 0, y: 0 })
    expect(result).toContainEqual({ x: 3, y: 1 })
    expect(result).toContainEqual({ x: 4, y: 4 })
    expect(result).toContainEqual({ x: 0, y: 3 })
    expect(result).not.toContainEqual({ x: 1, y: 1 })
    expect(result).not.toContainEqual({ x: 2, y: 2 })
    expect(result).not.toContainEqual({ x: 1, y: 2 })
    expect(result).not.toContainEqual({ x: 3, y: 3 })
  })

  it('should handle duplicate points', () => {
    const points = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 0 },
      { x: 2, y: 3 },
      { x: 2, y: 3 }
    ]
    const result = convexHull(points)
    expect(result).toHaveLength(3)
  })

  it('should handle points forming a pentagon', () => {
    const points = [
      { x: 0, y: 2 },
      { x: 1, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 2 },
      { x: 2, y: 4 }
    ]
    const result = convexHull(points)
    expect(result).toHaveLength(5)
  })

  it('should handle negative coordinates', () => {
    const points = [
      { x: -2, y: -2 },
      { x: 2, y: -2 },
      { x: 2, y: 2 },
      { x: -2, y: 2 },
      { x: 0, y: 0 }
    ]
    const result = convexHull(points)
    expect(result).toHaveLength(4)
    expect(result).not.toContainEqual({ x: 0, y: 0 })
  })

  it('should handle floating point coordinates', () => {
    const points = [
      { x: 0.5, y: 0.5 },
      { x: 1.5, y: 0.5 },
      { x: 1.5, y: 1.5 },
      { x: 0.5, y: 1.5 },
      { x: 1.0, y: 1.0 }
    ]
    const result = convexHull(points)
    expect(result).toHaveLength(4)
  })

  it('should not mutate the original input array', () => {
    const points = [
      { x: 3, y: 1 },
      { x: 0, y: 0 },
      { x: 4, y: 4 }
    ]
    const originalOrder = [...points]
    convexHull(points)
    expect(points).toEqual(originalOrder)
  })

  it('should handle large dataset efficiently', () => {
    const points = []
    for (let i = 0; i < 1000; i++) {
      points.push({
        x: Math.random() * 100,
        y: Math.random() * 100
      })
    }
    const result = convexHull(points)
    expect(result.length).toBeGreaterThan(0)
    expect(result.length).toBeLessThanOrEqual(1000)
  })
})
