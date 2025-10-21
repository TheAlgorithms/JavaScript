/**
 * Mo's Algorithm for answering range queries efficiently
 * @module MoAlgorithm
 *
 * Convention: queries are [left, right) — right is exclusive.
 */

export class Query {
  /**
   * @param {number} left - inclusive
   * @param {number} right - exclusive
   * @param {number} index - original index of the query
   */
  constructor(left, right, index) {
    this.left = left
    this.right = right
    this.index = index
  }
}

class QueryComparator {
  constructor(blockSize) {
    this.blockSize = blockSize
  }

  compare(a, b) {
    const blockA = Math.floor(a.left / this.blockSize)
    const blockB = Math.floor(b.left / this.blockSize)
    if (blockA !== blockB) {
      return blockA - blockB
    }
    return blockA % 2 === 0 ? a.right - b.right : b.right - a.right
  }
}

export class MoAlgorithm {
  /**
   * @param {Array} arr
   * @param {Array<Query>} queries
   * @param {Function} addElement - called with arr[index]
   * @param {Function} removeElement - called with arr[index]
   * @param {Function} getResult - returns current result
   */
  constructor(arr, queries, addElement, removeElement, getResult) {
    this.arr = arr
    this.queries = queries
    this.addElement = addElement
    this.removeElement = removeElement
    this.getResult = getResult
    this.blockSize = Math.max(1, Math.floor(Math.sqrt(arr.length)))
    this.comparator = new QueryComparator(this.blockSize)
  }

  validateQueries() {
    for (const q of this.queries) {
      if (
        !Number.isInteger(q.left) ||
        !Number.isInteger(q.right) ||
        q.left < 0 ||
        q.right < 0 ||
        q.left > q.right ||
        q.right > this.arr.length
      ) {
        throw new RangeError(
          `Invalid query bounds: [${q.left}, ${q.right}) for array length ${this.arr.length}`
        )
      }
    }
  }

  processQueries() {
    // Validate input ranges first (right is allowed to be equal to arr.length)
    this.validateQueries()

    const sorted = [...this.queries].sort((a, b) =>
      this.comparator.compare(a, b)
    )
    const results = new Array(this.queries.length)
    let currentLeft = 0
    let currentRight = -1 // current range is empty

    for (const q of sorted) {
      const left = q.left
      const rightExclusive = q.right
      const targetRight = rightExclusive - 1 // inclusive target index

      // expand right
      while (currentRight < targetRight) {
        currentRight++
        // safe: currentRight is guaranteed in [0, arr.length-1] by validation
        this.addElement(this.arr[currentRight])
      }

      // move left leftwards (expand)
      while (currentLeft > left) {
        currentLeft--
        this.addElement(this.arr[currentLeft])
      }

      // shrink right
      while (currentRight > targetRight) {
        this.removeElement(this.arr[currentRight])
        currentRight--
      }

      // shrink left
      while (currentLeft < left) {
        this.removeElement(this.arr[currentLeft])
        currentLeft++
      }

      results[q.index] = this.getResult()
    }

    return results
  }
}

export class UniqueElementsCounter {
  constructor() {
    this.frequency = new Map()
    this.uniqueCount = 0
  }

  addElement(element) {
    const count = this.frequency.get(element) || 0
    this.frequency.set(element, count + 1)
    if (count === 0) {
      this.uniqueCount++
    }
  }

  removeElement(element) {
    const count = this.frequency.get(element) || 0
    if (count <= 0) return
    if (count === 1) {
      this.frequency.delete(element)
      this.uniqueCount--
    } else {
      this.frequency.set(element, count - 1)
    }
  }

  getResult() {
    return this.uniqueCount
  }
}
