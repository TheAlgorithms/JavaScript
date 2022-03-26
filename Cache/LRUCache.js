class LRUCache {
  // LRU Cache to store a given capacity of data
  #capacity

  constructor (capacity) {
    if (!Number.isInteger(capacity) || capacity < 0) {
      throw new TypeError('Invalid capacity')
    }

    this.#capacity = ~~capacity
    this.misses = 0
    this.hits = 0
    this.cache = new Map()
  }

  get info () {
    return Object.freeze({
      misses: this.misses,
      hits: this.hits,
      capacity: this.capacity,
      size: this.size
    })
  }

  get size () {
    return this.cache.size
  }

  get capacity () {
    return this.#capacity
  }

  /**
   * delete oldest key existing in map by the help of iterator
   */
  #removeLeastRecentlyUsed () {
    this.cache.delete(this.cache.keys().next().value)
  }

  set capacity (newCapacity) {
    if (newCapacity < 0) {
      throw new RangeError('Capacity should be greater than 0')
    }

    if (newCapacity < this.capacity) {
      let diff = this.capacity - newCapacity

      while (diff--) {
        this.#removeLeastRecentlyUsed()
      }
    }

    this.#capacity = newCapacity
  }

  has (key) {
    key = String(key)

    return this.cache.has(key)
  }

  set (key, value) {
    key = String(key)
    // Sets the value for the input key and if the key exists it updates the existing key
    if (this.size === this.capacity) {
      this.#removeLeastRecentlyUsed()
    }

    this.cache.set(key, value)
  }

  get (key) {
    key = String(key)
    // Returns the value for the input key. Returns null if key is not present in cache
    if (this.cache.has(key)) {
      const value = this.cache.get(key)

      // refresh the cache to update the order of key
      this.cache.delete(key)
      this.cache.set(key, value)

      this.hits++
      return value
    }

    this.misses++
    return null
  }

  parse (json) {
    const { misses, hits, cache } = JSON.parse(json)

    this.misses += misses ?? 0
    this.hits += hits ?? 0

    for (const key in cache) {
      this.set(key, cache[key])
    }

    return this
  }

  toString (indent) {
    const replacer = (_, value) => {
      if (value instanceof Set) {
        return [...value]
      }

      if (value instanceof Map) {
        return Object.fromEntries(value)
      }

      return value
    }

    return JSON.stringify(this, replacer, indent)
  }
}

export { LRUCache }
