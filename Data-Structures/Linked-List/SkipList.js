/**
 * Skip List
 *
 * A skip list is a probabilistic data structure that maintains an ordered set
 * of keys and supports search, insertion and deletion in expected O(log n)
 * time. It is built from a stack of sorted linked lists where each higher
 * level skips over more elements, acting as an "express lane" into the level
 * below. Each newly inserted node is promoted to the next level with a fixed
 * probability `p` (typically 1/2), giving an expected height of log_{1/p}(n).
 *
 * Compared to balanced binary search trees, skip lists are simpler to
 * implement and require no rotations to maintain balance.
 *
 * Reference: https://en.wikipedia.org/wiki/Skip_list
 */

const DEFAULT_MAX_LEVEL = 16
const DEFAULT_P = 0.5

class SkipListNode {
  /**
   * @param {*} key - Ordered key stored at this node, or `null` for the head sentinel.
   * @param {*} value - Arbitrary value associated with `key`.
   * @param {number} level - Height of the node (number of forward pointers).
   */
  constructor(key, value, level) {
    this.key = key
    this.value = value
    this.forward = new Array(level + 1).fill(null)
  }
}

class SkipList {
  /**
   * Create an empty skip list.
   *
   * @param {object} [options] - Optional tuning parameters.
   * @param {number} [options.maxLevel=16] - Maximum number of levels (>= 1).
   * @param {number} [options.p=0.5] - Promotion probability in (0, 1).
   * @param {() => number} [options.random=Math.random] - RNG returning a value in [0, 1); injectable for deterministic tests.
   *
   * @example
   * const list = new SkipList()
   * list.insert(3, 'three')
   * list.search(3) // 'three'
   */
  constructor(options = {}) {
    const {
      maxLevel = DEFAULT_MAX_LEVEL,
      p = DEFAULT_P,
      random = Math.random
    } = options

    if (!Number.isInteger(maxLevel) || maxLevel < 1) {
      throw new RangeError('maxLevel must be a positive integer')
    }
    if (typeof p !== 'number' || p <= 0 || p >= 1) {
      throw new RangeError('p must be a number in the open interval (0, 1)')
    }
    if (typeof random !== 'function') {
      throw new TypeError(
        'random must be a function returning a value in [0, 1)'
      )
    }

    this.maxLevel = maxLevel
    this.p = p
    this.random = random
    this.level = 0
    this.length = 0
    this.head = new SkipListNode(null, null, maxLevel)
  }

  /**
   * Pick a random level in [0, maxLevel] using geometric distribution.
   *
   * @returns {number} The chosen level for a new node.
   * @private
   */
  _randomLevel() {
    let lvl = 0
    while (this.random() < this.p && lvl < this.maxLevel) {
      lvl++
    }
    return lvl
  }

  /**
   * Compare two keys using `<` and `>`. Numbers, strings and any type that
   * supports the relational operators consistently can be used as keys.
   *
   * @param {*} a - Left-hand key.
   * @param {*} b - Right-hand key.
   * @returns {number} `-1` if `a < b`, `1` if `a > b`, `0` otherwise.
   * @private
   */
  _compare(a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  }

  /**
   * Insert a key/value pair. If the key already exists, its value is updated
   * in place and the size of the list does not change.
   *
   * @param {*} key - Key to insert; must be comparable with existing keys.
   * @param {*} [value] - Value associated with the key (defaults to the key).
   * @returns {SkipList} The list, for chaining.
   *
   * @example
   * const list = new SkipList()
   * list.insert(1, 'a').insert(2, 'b')
   * list.size() // 2
   */
  insert(key, value = key) {
    const update = new Array(this.maxLevel + 1).fill(this.head)
    let current = this.head

    for (let i = this.level; i >= 0; i--) {
      while (
        current.forward[i] !== null &&
        this._compare(current.forward[i].key, key) < 0
      ) {
        current = current.forward[i]
      }
      update[i] = current
    }

    current = current.forward[0]

    if (current !== null && this._compare(current.key, key) === 0) {
      current.value = value
      return this
    }

    const lvl = this._randomLevel()
    if (lvl > this.level) {
      for (let i = this.level + 1; i <= lvl; i++) {
        update[i] = this.head
      }
      this.level = lvl
    }

    const node = new SkipListNode(key, value, lvl)
    for (let i = 0; i <= lvl; i++) {
      node.forward[i] = update[i].forward[i]
      update[i].forward[i] = node
    }
    this.length++
    return this
  }

  /**
   * Look up the value associated with a key.
   *
   * @param {*} key - Key to search for.
   * @returns {*} The associated value, or `undefined` if `key` is absent.
   *
   * @example
   * const list = new SkipList()
   * list.insert('apple', 1)
   * list.search('apple')   // 1
   * list.search('banana')  // undefined
   */
  search(key) {
    let current = this.head
    for (let i = this.level; i >= 0; i--) {
      while (
        current.forward[i] !== null &&
        this._compare(current.forward[i].key, key) < 0
      ) {
        current = current.forward[i]
      }
    }
    current = current.forward[0]
    if (current !== null && this._compare(current.key, key) === 0) {
      return current.value
    }
    return undefined
  }

  /**
   * Check whether a key is present.
   *
   * @param {*} key - Key to test.
   * @returns {boolean} `true` if the key is present.
   *
   * @example
   * const list = new SkipList()
   * list.insert(7)
   * list.has(7) // true
   */
  has(key) {
    let current = this.head
    for (let i = this.level; i >= 0; i--) {
      while (
        current.forward[i] !== null &&
        this._compare(current.forward[i].key, key) < 0
      ) {
        current = current.forward[i]
      }
    }
    current = current.forward[0]
    return current !== null && this._compare(current.key, key) === 0
  }

  /**
   * Remove the entry with the given key.
   *
   * @param {*} key - Key to delete.
   * @returns {boolean} `true` if a node was removed, `false` if the key was absent.
   *
   * @example
   * const list = new SkipList()
   * list.insert(1).insert(2)
   * list.delete(1) // true
   * list.delete(1) // false
   */
  delete(key) {
    const update = new Array(this.maxLevel + 1).fill(this.head)
    let current = this.head

    for (let i = this.level; i >= 0; i--) {
      while (
        current.forward[i] !== null &&
        this._compare(current.forward[i].key, key) < 0
      ) {
        current = current.forward[i]
      }
      update[i] = current
    }

    current = current.forward[0]
    if (current === null || this._compare(current.key, key) !== 0) {
      return false
    }

    for (let i = 0; i <= this.level; i++) {
      if (update[i].forward[i] !== current) break
      update[i].forward[i] = current.forward[i]
    }

    while (this.level > 0 && this.head.forward[this.level] === null) {
      this.level--
    }
    this.length--
    return true
  }

  /**
   * Number of distinct keys in the list.
   *
   * @returns {number} The current size.
   *
   * @example
   * const list = new SkipList()
   * list.insert(1).insert(2).insert(2)
   * list.size() // 2
   */
  size() {
    return this.length
  }

  /**
   * Whether the list contains no keys.
   *
   * @returns {boolean} `true` when empty.
   */
  isEmpty() {
    return this.length === 0
  }

  /**
   * Yield `[key, value]` pairs in ascending key order.
   *
   * @returns {Generator<[*, *]>} Iterator over the entries of the list.
   *
   * @example
   * const list = new SkipList()
   * list.insert(2, 'b').insert(1, 'a')
   * Array.from(list.entries()) // [[1, 'a'], [2, 'b']]
   */
  *entries() {
    let current = this.head.forward[0]
    while (current !== null) {
      yield [current.key, current.value]
      current = current.forward[0]
    }
  }

  /**
   * Default iterator yielding keys in ascending order.
   *
   * @returns {Generator<*>} Iterator over keys.
   *
   * @example
   * const list = new SkipList()
   * list.insert(3).insert(1).insert(2)
   * [...list] // [1, 2, 3]
   */
  *[Symbol.iterator]() {
    let current = this.head.forward[0]
    while (current !== null) {
      yield current.key
      current = current.forward[0]
    }
  }
}

export { SkipList, SkipListNode }
