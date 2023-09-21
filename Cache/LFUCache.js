class CacheNode {
  constructor(key, value, frequency) {
    this.key = key;
    this.value = value;
    this.frequency = frequency;
    Object.seal(this);
  }
}

class FrequencyMap extends Map {
  static get [Symbol.species]() {
    return Map;
  }

  get [Symbol.toStringTag]() {
    return '';
  }

  refresh(node) {
    const { frequency } = node;
    const freqSet = this.get(frequency);
    freqSet.delete(node);
    node.frequency++;
    this.insert(node);
  }

  insert(node) {
    const { frequency } = node;

    if (!this.has(frequency)) {
      this.set(frequency, new Set());
    }

    this.get(frequency).add(node);
  }
}

class LFUCache {
  #capacity;
  #frequencyMap;
  misses = 0;
  hits = 0;
  cache = new Map();

  constructor(capacity) {
    this.#capacity = capacity;
    this.#frequencyMap = new FrequencyMap();
    Object.seal(this);
  }

  get capacity() {
    return this.#capacity;
  }

  get size() {
    return this.cache.size;
  }

  set capacity(newCapacity) {
    if (this.#capacity > newCapacity) {
      let diff = this.#capacity - newCapacity;

      while (diff--) {
        this.#removeCacheNode();
      }

      if (this.cache.size === 0) {
        this.#frequencyMap.clear();
      }
    }

    this.#capacity = newCapacity;
  }

  get info() {
    return Object.freeze({
      misses: this.misses,
      hits: this.hits,
      capacity: this.capacity,
      currentSize: this.size,
      leastFrequency: this.leastFrequency
    });
  }

  get leastFrequency() {
    const freqCacheIterator = this.#frequencyMap.keys();
    let leastFrequency = freqCacheIterator.next().value || null;

    while (leastFrequency !== null && this.#frequencyMap.get(leastFrequency)?.size === 0) {
      leastFrequency = freqCacheIterator.next().value;
    }

    return leastFrequency;
  }

  #removeCacheNode() {
    const leastFreqSet = this.#frequencyMap.get(this.leastFrequency);
    const LFUNode = leastFreqSet.values().next().value;

    leastFreqSet.delete(LFUNode);
    this.cache.delete(LFUNode.key);
  }

  has(key) {
    key = String(key);
    return this.cache.has(key);
  }

  get(key) {
    key = String(key);

    if (this.cache.has(key)) {
      const oldNode = this.cache.get(key);
      this.#frequencyMap.refresh(oldNode);
      this.hits++;
      return oldNode.value;
    }

    this.misses++;
    return null;
  }

  set(key, value, frequency = 1) {
    key = String(key);

    if (this.#capacity === 0) {
      throw new RangeError('LFUCache ERROR: The Capacity is 0');
    }

    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.#frequencyMap.refresh(node);
    } else {
      if (this.#capacity === this.cache.size) {
        this.#removeCacheNode();
      }
      const node = new CacheNode(key, value, frequency);
      this.#frequencyMap.insert(node);
      this.cache.set(key, node);
    }

    return this;
  }
}

export default LFUCache
