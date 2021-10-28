/**
 * union find data structure for javascript
 *
 * In computer science, a disjoint-set data structure, also called a union–find data structure or merge–find set,
 * is a data structure that stores a collection of disjoint (non-overlapping) sets. Equivalently, it stores a partition
 * of a set into disjoint subsets. It provides operations for adding new sets, merging sets (replacing them by their union),
 * and finding a representative member of a set.
 * The last operation allows to find out efficiently if any two elements are in the same or different sets.
 *
 * Disjoint-set data structures play a key role in Kruskal's algorithm for finding the minimum spanning tree of a graph.
 * The importance of minimum spanning trees means that disjoint-set data structures underlie a wide variety of algorithms.
 * In addition, disjoint-set data structures also have applications to symbolic computation, as well in compilers,
 * especially for register allocation problems.
 *
 * you can learn more on disjoint-set / union–find data structure at https://en.wikipedia.org/wiki/Disjoint-set_data_structure
 */
function UnionFind (n, key) {
  if (!(this instanceof UnionFind)) return new UnionFind(n)
  if (key && typeof key !== 'function') {
    throw new Error('key has to be a function or else left undefined')
  }
  let cnt, length
  // init Union Find with number of distinct groups. Each group will be referred to as index of the array of size 'size' starting at 0.
  // Provide an optional key function that maps these indices. I.e. for the groups starting with 1 provide function(a){return a-1;}. The default value is function(a){return a;}.
  key = key || function (a) { return a }
  cnt = length = n
  const id = new Array(n)
  const sz = new Array(n)
  for (let i = 0; i < n; i++) {
    id[i] = i
    sz[i] = 1
  }
  // Returns the number of elements of uf object.
  this.size = function () {
    return length
  }
  // Returns the number of distinct groups left inside the object.
  this.count = function () {
    return cnt
  }
  // Return the root (value) of the group in which p is.
  this.find = function (p) {
    p = key(p)
    while (p !== id[p]) {
      id[p] = id[id[p]]
      p = id[p]
    }
    return p
  }
  // Returns true if p and p are both in same group, false otherwise.
  this.connected = function (p, q) {
    p = key(p)
    q = key(q)
    ensureIndexWithinBounds(p, q)
    return this.find(p) === this.find(q)
  }
  // Combine elements in groups p and q into a single group. In other words connect the two groups.
  this.union = function (p, q) {
    p = key(p)
    q = key(q)
    ensureIndexWithinBounds(p, q)
    const i = this.find(p)
    const j = this.find(q)
    if (i === j) return
    if (sz[i] < sz[j]) {
      id[i] = j; sz[j] += sz[i]
    } else {
      id[j] = i; sz[i] += sz[j]
    }
    cnt--
  }
  function ensureIndexWithinBounds (args) {
    for (let i = arguments.length - 1; i >= 0; i--) {
      const p = arguments[i]
      if (p >= length) throw new Error('Index out of bounds. The maximum index can be length-1')
    }
  }
}

export { UnionFind }
