/**
 * @function Introsort (As implemented in STD C++ Lib)
 * The function performs introsort which is used in
 * C++ Standard LIbrary, the implementation is inspired from]
 * library routine itself.
 * ALGORITHM:
 * 1) It performs quicksort on array until the recursion depth
 *    exceeds a pre determined limit.
 * 2) If the limit is reached it switches to heapsort
 * 3) For array size less than a threshold(16) directly
 *    does insertion sort on array
 * @param {Array} array the array to be sorted
 * @param {Function} compare the comparison function
 *
 * @see [Introsort](https://en.wikipedia.org/wiki/Introsort)
 * @author [Lakhan Nad](https://github.com/Lakhan-Nad)
 */
function introsort (array, compare) {
  /**
   * @function Default Comparison Function
   * This function is same as implemented by
   * Array.sort method
   * @see [StackOverflow](https://stackoverflow.com/questions/47334234/how-to-implement-array-prototype-sort-default-compare-function)
   * @param {*} a variable 1
   * @param {*} b variable 2
   * @returns {Number}
   * -1 if a is less than b
   *  0 if a is equal to b
   *  1 if a greater than b
   */
  const defaultComparator = function (x, y) {
    if (x === undefined && y === undefined) return 0
    if (x === undefined) return 1
    if (y === undefined) return -1
    const xString = toString(x)
    const yString = toString(y)
    if (xString < yString) return -1
    if (xString > yString) return 1
    return 0
  }
  /**
   * @function helper function for defaultComparator
   * Converts a given object to String
   * @throws TypeError()
   * @param {Object} obj
   * @returns {String} String representation of given object
   */
  const toString = function (obj) {
    if (obj === null) return 'null'
    if (typeof obj === 'boolean' || typeof obj === 'number') {
      return obj.toString()
    }
    if (typeof obj === 'string') return obj
    if (typeof obj === 'symbol') throw new TypeError()
    return obj.toString()
  }
  /**
   * Checks if the value passed is an array
   * or not
   */
  if (Array.isArray(array) === false) {
    return
  }
  /**
   * If the compare parameter is not a function
   * or not passed at all use default comparator
   * function
   */
  if (typeof compare !== 'function') {
    compare = defaultComparator // If compare is not a comparator function
  }
  /**
   * Use a closure to define the whole sort
   * implementation this is done through
   * [IIFE](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)
   */
  return (function (array, comparator) {
    const swap = function (index1, index2) {
      const temp = array[index1]
      array[index1] = array[index2]
      array[index2] = temp
    }
    /**
     * @constant THRESHOLD
     * If the length of array is less than
     * this then we simply perform insertion sort
     */
    const THRESHOLD = 16
    /**
     * @constant TUNEMAXDEPTH
     * Constant used to increase or decrease value
     * of maxDepth
     */
    const TUNEMAXDEPTH = 1
    const len = array.length
    /**
     * Return if array is only of length 1
     * Array of size 1 is always sorted
     */
    if (len === 1) {
      return
    }
    /**
     * Calculate maxDepth = log2(len)
     * Taken from implementation in stdc++
     */
    const maxDepth = Math.floor(Math.log2(len)) * TUNEMAXDEPTH
    /**
     * The very first call to quicksort
     * this initiates sort routine
     */
    quickSort(0, len, maxDepth)
    /**
     * A final check call to insertion sort
     * on sorted array
     */
    insertionSort(0, len)
    /** *********************  Implementation of various routines  **************************/
    /**
     * @function
     * This is recursive quicksort implementation in array
     * of segment [start,last-1]
     * [QuickSort](https://en.wikipedia.org/wiki/Quicksort)
     * @param {Number} start the start index of array segment to be sorted
     * @param {Number} last  one more than the last index of array segment
     * @param {Number} depth this measures how many recursive calls are done
     */
    function quickSort (start, last, depth) {
      if (last - start <= THRESHOLD) {
        insertionSort(start, last)
        return
      } else if (depth <= 0) {
        heapSort(start, last)
        return
      }
      let pivot = (last + start) >> 1
      pivot = partition(start, last, pivot)
      quickSort(start, pivot, depth - 1)
      quickSort(pivot + 1, last, depth - 1)
    }
    /**
     * @function Helper function to quicksort
     * @param {Number} start the start of array segment to partition
     * @param {Number} last  one more than last index of the array segment
     * @param {Number} pivot the index of pivot to be used
     * @returns {Number} the index of pivot after partition
     */
    function partition (start, last, pivot) {
      swap(start, pivot)
      pivot = start
      let lo = start
      let hi = last
      while (true) {
        lo++
        while (comparator(array[lo], array[pivot]) <= 0 && lo !== last) {
          lo++
        }
        hi--
        while (comparator(array[hi], array[pivot]) > 0 && hi !== start) {
          hi--
        }
        if (lo >= hi) {
          break
        }
        swap(lo, hi)
      }
      swap(start, hi)
      return hi
    }
    /**
     * @function
     * Performs insertion sort on array of range
     * [start, last-1]
     * @param {Number} start the first index of array segment to be sorted
     * @param {Number} last  one more than last index of array to be sorted
     */
    function insertionSort (start, last) {
      let i, j
      for (i = start + 1; i < last; i++) {
        j = i - 1
        while (j >= 0 && comparator(array[j], array[j + 1]) > 0) {
          swap(j, j + 1)
          j--
        }
      }
    }
    /**
     * @function
     * Performs heapsort in array segment of range [start, last-1]
     * [HeapSort](https://en.wikipedia.org/wiki/Heapsort)
     * @param {Number} start the first index of array segment to be sorted
     * @param {Number} last  one more than last index of array to be sorted
     */
    function heapSort (start, last) {
      let x = (last + start) >> 1
      while (x - start >= 0) {
        heapify(x, start, last)
        x--
      }
      x = last - 1
      while (x - start > 0) {
        swap(start, x)
        heapify(start, start, x)
        x--
      }
    }
    /**
     * @function Helper function to heapsort routine
     * @param {Number} cur the index we need to heapify
     * @param {Number} start the start index of array segment that cur belongs to
     * @param {Number} last  one more than last index of segment that cur belongs to
     */
    function heapify (cur, start, last) {
      const size = last - start
      let max, lt, rt
      cur = cur - start
      while (true) {
        max = cur
        lt = 2 * max + 1
        rt = 2 * max + 2
        if (
          lt < size &&
          comparator(array[start + max], array[start + lt]) < 0
        ) {
          max = lt
        }
        if (
          rt < size &&
          comparator(array[start + max], array[start + rt]) < 0
        ) {
          max = rt
        }
        if (max !== cur) {
          swap(start + cur, start + max)
          cur = max
        } else {
          break
        }
      }
    }
  })(array, compare)
}

/**
 * @example Demo run of the sort routine
 * The data is randomly generated
 * Returns 'RIGHT:)' if the sort routine worked as expected,
 *         'WRONG!!' otherwise
 */
function demo1 () {
  const data = []
  const size = 1000000
  let i = 0
  let temp
  const c = function (a, b) {
    return a - b
  }
  for (i = 0; i < size; i++) {
    temp = Math.random() * Number.MAX_SAFE_INTEGER
    data.push(temp)
  }
  introsort(data, c)
  let faulty = false
  for (i = 1; i < size; i++) {
    if (data[i] < data[i - 1]) {
      faulty = true
      break
    }
  }
  if (faulty) {
    return 'WRONG!!'
  } else {
    return 'RIGHT:)'
  }
}

/**
 * @example Demo run of the sort routine
 * using the default compare function and
 * comparing the results with Array.sort
 */
function demo2 () {
  const data = []
  const data2 = []
  const size = 1000000
  let i = 0
  let temp
  for (i = 0; i < size; i++) {
    temp = Math.random() * Number.MAX_SAFE_INTEGER
    data.push(temp)
    data2.push(temp)
  }
  introsort(data)
  data2.sort()
  let faulty = false
  for (i = 1; i < size; i++) {
    if (data[i] !== data2[i]) {
      faulty = true
      break
    }
  }
  if (faulty) {
    return 'WRONG Implemented Comparator!!'
  } else {
    return 'Comparator Works Fine:)'
  }
}

export { introsort, demo1, demo2 }
