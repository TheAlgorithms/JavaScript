import LFUCache from '../LFUCache'
import { fibonacciCache } from './cacheTest'

describe('Testing LFUCache class', () => {
  it('Example 1 (Small Cache, size = 2)', () => {
    const cache = new LFUCache(1) // initially capacity 1

    cache.capacity = 2 // increase the capacity

    expect(cache.capacity).toBe(2)

    cache.set(1, 1) // frequency = 1
    cache.set(2, 2) // frequency = 1

    expect(cache.get(1)).toBe(1) // frequency = 2
    expect(cache.get(2)).toBe(2) // frequency = 2

    // Additional entries triggers cache rotate
    cache.set(3, 3) // frequency = 1 & key 1 removed from the cached, cause now it's tie and followed the LRU system

    expect(cache.get(1)).toBe(null) // misses = 1
    expect(cache.get(2)).toBe(2) // frequency = 3
    expect(cache.get(3)).toBe(3) // frequency = 2

    cache.set(4, 4) // frequency = 1 & key 3 removed cause the frequency of 3 is 2 which is least frequency
    expect(cache.get(1)).toBe(null) // misses = 2
    expect(cache.get(2)).toBe(2) // frequency = 4
    expect(cache.get(3)).toBe(null) // misses = 3
    expect(cache.get(4)).toBe(4) // frequency = 2 which is least

    expect(cache.info).toEqual({
      misses: 3,
      hits: 6,
      capacity: 2,
      currentSize: 2,
      leastFrequency: 2
    })

    const json = '{"misses":3,"hits":6,"cache":{"2":{"key":"2","value":2,"frequency":4},"4":{"key":"4","value":4,"frequency":2}}}'
    expect(cache.toString()).toBe(json)

    const cacheInstance = cache.parse(json) // again merge the json

    expect(cacheInstance).toBe(cache) // return the same cache

    cache.capacity = 1 // decrease the capacity

    expect(cache.info).toEqual({ // after merging the info
      misses: 6,
      hits: 12,
      capacity: 1,
      currentSize: 1,
      leastFrequency: 5
    })

    const clearedCache = cache.clear() // clear the cache
    expect(clearedCache.size).toBe(0)
  })

  it('Example 2 (Computing Fibonacci Series, size = 100)', () => {
    const cache = new LFUCache(100)

    for (let i = 1; i <= 100; i++) {
      fibonacciCache(i, cache)
    }

    expect(cache.info).toEqual({
      misses: 103,
      hits: 193,
      capacity: 100,
      currentSize: 98,
      leastFrequency: 1
    })
  })
})
