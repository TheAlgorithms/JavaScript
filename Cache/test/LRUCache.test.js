import LRUCache from '../LRUCache'
import { fibonacciCache } from './cacheTest'

describe('Testing LRUCache', () => {
  it('Testing with invalid capacity', () => {
    expect(() => new LRUCache()).toThrow()
    expect(() => new LRUCache('Invalid')).toThrow()
    expect(() => new LRUCache(-1)).toThrow()
    expect(() => new LRUCache(Infinity)).toThrow()
  })

  it('Example 1 (Small Cache, size = 2)', () => {
    const cache = new LRUCache(1) // initially capacity

    cache.capacity++ // now the capacity is increasing by one

    cache.set(1, 1)
    cache.set(2, 2)

    expect(cache.get(1)).toBe(1)
    expect(cache.get(2)).toBe(2)

    // Additional entries triggers cache rotate
    cache.set(3, 3)

    // Then we should have a cache miss for the first entry added
    expect(cache.get(1)).toBe(null)
    expect(cache.get(2)).toBe(2)
    expect(cache.get(3)).toBe(3)

    cache.set(4, 4)
    expect(cache.get(1)).toBe(null) // cache miss
    expect(cache.get(2)).toBe(null) // cache miss
    expect(cache.get(3)).toBe(3)
    expect(cache.get(4)).toBe(4)

    expect(cache.info).toEqual({
      misses: 3,
      hits: 6,
      capacity: 2,
      size: 2
    })

    const json = '{"misses":3,"hits":6,"cache":{"3":3,"4":4}}'
    expect(cache.toString()).toBe(json)

    // merge with json
    cache.parse(json)

    cache.capacity-- // now the capacity decreasing by one

    expect(cache.info).toEqual({
      misses: 6,
      hits: 12,
      capacity: 1,
      size: 1
    })
  })

  it('Example 2 (Computing Fibonacci Series, size = 100)', () => {
    const cache = new LRUCache(100)

    for (let i = 1; i <= 100; i++) {
      fibonacciCache(i, cache)
    }

    expect(cache.info).toEqual({
      misses: 103,
      hits: 193,
      capacity: 100,
      size: 98
    })
  })
})
