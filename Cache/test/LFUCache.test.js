import { LFUCache } from '../LFUCache'

describe('LFUCache', () => {
  it('Example 1 (Small Cache, size=2)', () => {
    const cache = new LFUCache(2)
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

    expect(cache.cacheInfo()).toBe('CacheInfo(hits=6, misses=3, capacity=2, current size=2)')
  })

  it('Example 2 (Computing Fibonacci Series, size=100)', () => {
    const cache = new LFUCache(100)
    for (let i = 1; i <= 100; i++) {
      fib(i, cache)
    }
    expect(cache.cacheInfo()).toBe('CacheInfo(hits=193, misses=103, capacity=100, current size=98)')
  })
})

// Helper for building and caching Fibonacci series
function fib (num, cache = null) {
  if (cache) {
    const value = cache.get(num)
    if (value) {
      return value
    }
  }
  if (num === 1 || num === 2) {
    return 1
  }
  const result = fib(num - 1, cache) + fib(num - 2, cache)
  if (cache) {
    cache.set(num, result)
  }
  return result
}
