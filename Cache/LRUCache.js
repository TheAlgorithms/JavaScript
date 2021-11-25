class LRUCache {
  // LRU Cache to store a given capacity of data
  constructor (capacity) {
    this.cache = new Map()
    this.capacity = capacity
    this.hits = 0
    this.miss = 0
  }

  cacheInfo () {
    // Return the details for the cache instance [hits, misses, capacity, current_size]
    return `CacheInfo(hits=${this.hits}, misses=${this.miss}, capacity=${this.capacity}, current size=${this.cache.size})`
  }

  set (key, value) {
    // Sets the value for the input key and if the key exists it updates the existing key
    if (this.cache.size === this.capacity) {
      // delete oldest key existing in map
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
  }

  get (key) {
    // Returns the value for the input key. Returns null if key is not present in cache
    if (this.cache.has(key)) {
      const value = this.cache.get(key)
      // refresh the cache to update the order of key
      this.cache.delete(key)
      this.cache.set(key, value)
      this.hits += 1
      return value
    } else {
      this.miss += 1
      return null
    }
  }
}

export { LRUCache }
