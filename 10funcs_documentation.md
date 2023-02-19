### function 1   .\Cellular-Automata\ConwaysGameOfLife.js

```js
export function newGeneration (cells) {
  const nextGeneration = []
  for (let i = 0; i < cells.length; i++) {
    const nextGenerationRow = []
    for (let j = 0; j < cells[i].length; j++) {
      // Get the number of living neighbours
      let neighbourCount = 0
      if (i > 0 && j > 0) neighbourCount += cells[i - 1][j - 1]
      if (i > 0) neighbourCount += cells[i - 1][j]
      if (i > 0 && j < cells[i].length - 1) neighbourCount += cells[i - 1][j + 1]
      if (j > 0) neighbourCount += cells[i][j - 1]
      if (j < cells[i].length - 1) neighbourCount += cells[i][j + 1]
      if (i < cells.length - 1 && j > 0) neighbourCount += cells[i + 1][j - 1]
      if (i < cells.length - 1) neighbourCount += cells[i + 1][j]
      if (i < cells.length - 1 && j < cells[i].length - 1) neighbourCount += cells[i + 1][j + 1]

      // Decide whether the cell is alive or dead
      const alive = cells[i][j] === 1
      if ((alive && neighbourCount >= 2 && neighbourCount <= 3) || (!alive && neighbourCount === 3)) {
        nextGenerationRow.push(1)
      } else {
        nextGenerationRow.push(0)
      }
    }
    nextGeneration.push(nextGenerationRow)
  }
  return nextGeneration
}

```



- CC: 20

- Parameters(1)

  * cells(array)

- Return

  nextGeneration(array)

- Purpose 

  Generates the next generation for a given state of Conway's Game of Life.

- Reasons of complexity

  The function is for generating next generation of Conway's Game of Life. It accepts an array and also returns an array. Besides, there are nested loop and many branch statements within the function, which significantly increases the cyclomatic complexity.



### function 2  .\Ciphers\KeyFinder.js

```js
function keyFinder (str) { // str is used to get the input of encrypted string
  const wordBank = [
    'I ',
    'You ',
    'We ',
    'They ',
    'He ',
    'She ',
    'It ',
    ' the ',
    'The ',
    ' of ',
    ' is ',
    'Is ',
    ' am ',
    'Am ',
    ' are ',
    'Are ',
    ' have ',
    'Have ',
    ' has ',
    'Has ',
    ' may ',
    'May ',
    ' be ',
    'Be ']
  // let wordbankelementCounter = 0;
  // let key = 0; // return zero means the key can not be found
  const inStr = str.toString() // convert the input to String
  let outStr = '' // store the output value
  let outStrElement = '' // temporary store the word inside the outStr, it is used for comparison
  for (let k = 0; k < 26; k++) { // try the number of key shifted, the sum of character from a-z or A-Z is 26
    outStr = caesarCipherEncodeAndDecodeEngine(inStr, k) // use the encryption engine to decrypt the input string

    // loop through the whole input string
    for (let s = 0; s < outStr.length; s++) {
      for (let i = 0; i < wordBank.length; i++) {
        // initialize the outStrElement which is a temp output string for comparison,
        // use a loop to find the next digit of wordBank element and compare with outStr's digit
        for (let w = 0; w < wordBank[i].length; w++) {
          outStrElement += outStr[s + w]
        }
        // this part need to be optimize with the calculation of the number of occurrence of word's probabilities
        // linked list will be used in the next stage of development to calculate the number of occurrence of the key
        if (wordBank[i] === outStrElement) {
          return k // return the key number if founded
        }
        outStrElement = '' // reset the temp word
      } // end for ( let i=0; i < wordBank.length; i++)
    }
  }
  return 0 // return 0 if found nothing
}

/* this sub-function is used to assist the keyFinder to find the key */
function caesarCipherEncodeAndDecodeEngine (inStr, numShifted) {
  const shiftNum = numShifted
  let charCode = 0
  let outStr = ''
  let shiftedCharCode = 0
  let result = 0

  for (let i = 0; i < inStr.length; i++) {
    charCode = inStr[i].charCodeAt()
    shiftedCharCode = charCode + shiftNum
    result = charCode

    if ((charCode >= 48 && charCode <= 57)) {
      if (shiftedCharCode < 48) {
        let diff = Math.abs(48 - 1 - shiftedCharCode) % 10

        while (diff >= 10) {
          diff = diff % 10
        }
        document.getElementById('diffID').innerHTML = diff

        shiftedCharCode = 57 - diff

        result = shiftedCharCode
      } else if (shiftedCharCode >= 48 && shiftedCharCode <= 57) {
        result = shiftedCharCode
      } else if (shiftedCharCode > 57) {
        let diff = Math.abs(57 + 1 - shiftedCharCode) % 10

        while (diff >= 10) {
          diff = diff % 10
        }
        document.getElementById('diffID').innerHTML = diff

        shiftedCharCode = 48 + diff

        result = shiftedCharCode
      }
    } else if ((charCode >= 65 && charCode <= 90)) {
      if (shiftedCharCode <= 64) {
        let diff = Math.abs(65 - 1 - shiftedCharCode) % 26

        while ((diff % 26) >= 26) {
          diff = diff % 26
        }
        shiftedCharCode = 90 - diff
        result = shiftedCharCode
      } else if (shiftedCharCode >= 65 && shiftedCharCode <= 90) {
        result = shiftedCharCode
      } else if (shiftedCharCode > 90) {
        let diff = Math.abs(shiftedCharCode - 1 - 90) % 26

        while ((diff % 26) >= 26) {
          diff = diff % 26
        }
        shiftedCharCode = 65 + diff
        result = shiftedCharCode
      }
    } else if ((charCode >= 97 && charCode <= 122)) {
      if (shiftedCharCode <= 96) {
        let diff = Math.abs(97 - 1 - shiftedCharCode) % 26

        while ((diff % 26) >= 26) {
          diff = diff % 26
        }
        shiftedCharCode = 122 - diff
        result = shiftedCharCode
      } else if (shiftedCharCode >= 97 && shiftedCharCode <= 122) {
        result = shiftedCharCode
      } else if (shiftedCharCode > 122) {
        let diff = Math.abs(shiftedCharCode - 1 - 122) % 26

        while ((diff % 26) >= 26) {
          diff = diff % 26
        }
        shiftedCharCode = 97 + diff
        result = shiftedCharCode
      }
    }
    outStr = outStr + String.fromCharCode(parseInt(result))
  }
  return outStr
}

export { keyFinder }


```



- CC: 26

- Parameters(1)

  * str (get the input of encrypted string)

- Return

  the key number if founded

- Purpose 

  Find and retrieve the encryption key automatically

- Reasons of complexity

  The function has nested loops and uses an auxiliary function which has a lot more branch statements. Both of them cause a high CC.



### function 3   .\Conversions\BinaryToHex.js

```js
const pad = (num, padlen) => {
  const pad = new Array(1 + padlen).join(0)
  return (pad + num).slice(-pad.length)
}

const hexLookup = (bin) => {
  let binary = bin
  if (binary.length < 4) {
    binary = pad(binary, 4)
  }
  switch (binary) {
    case '0000': return '0'
    case '0001': return '1'
    case '0010': return '2'
    case '0011': return '3'
    case '0100': return '4'
    case '0101': return '5'
    case '0110': return '6'
    case '0111': return '7'
    case '1000': return '8'
    case '1001': return '9'
    case '1010': return 'A'
    case '1011': return 'B'
    case '1100': return 'C'
    case '1101': return 'D'
    case '1110': return 'E'
    case '1111': return 'F'
  }
}
const binaryToHex = (binaryString) => {
  /*
  Function for converting Binary to Hex

  1. The conversion will start from Least Significant Digit (LSB) to the Most Significant Bit (MSB).
  2. We divide the bits into sections of 4-bits starting from LSB to MSB.
  3. If the MSB get less than 4 bits, then we pad 0s to the front of it.

  For Example:
  Binary String = '1001101'

  1. Divide it to 2 parts => ['100', '1101']
  2. Pad 0s the MSB so it'll be => ['0100', '1101']
  3. Use the lookup table and merge them, therefore the result is 4D.

  */

  let result = ''
  binaryString = binaryString.split('')
  for (let i = binaryString.length - 1; i >= 0; i = i - 4) {
    if (i >= 3) {
      result += hexLookup(binaryString.slice(i - 3, i + 1).join(''))
    } else {
      result += hexLookup(binaryString.slice(0, i + 1).join(''))
    }
  }
  return result.split('').reverse().join('')
}

export default binaryToHex

```



- CC: 18

- Parameters(1)

  * binaryString

- Return

  hex number(in array)

- Purpose 

  Function for converting Binary to Hex

- Reasons of complexity

  The function has a switch statement block for converting binary to hex which creates many branches and thus increases complexity.



### function 4   .\Data-Structures\Tree\Trie.js

```js
const TrieNode = function TrieNode (key, parent) {
  this.key = key
  this.count = 0
  this.children = Object.create(null)
  if (parent === undefined) {
    this.parent = null
  } else {
    this.parent = parent
  }
}

function Trie () {
  // create only root with null key and parent
  this.root = new TrieNode(null, null)
}

// Recursively finds the occurrence of all words in a given node
Trie.findAllWords = function (root, word, output) {
  if (root === null) return
  if (root.count > 0) {
    if (typeof output === 'object') { output.push({ word, count: root.count }) }
  }
  let key
  for (key in root.children) {
    word += key
    this.findAllWords(root.children[key], word, output)
    word = word.slice(0, -1)
  }
}

Trie.prototype.insert = function (word) {
  if (typeof word !== 'string') return
  if (word === '') {
    this.root.count += 1
    return
  }
  let node = this.root
  const len = word.length
  let i
  for (i = 0; i < len; i++) {
    if (node.children[word.charAt(i)] === undefined) { node.children[word.charAt(i)] = new TrieNode(word.charAt(i), node) }
    node = node.children[word.charAt(i)]
  }
  node.count += 1
}

Trie.prototype.findPrefix = function (word) {
  if (typeof word !== 'string') return null
  let node = this.root
  const len = word.length
  let i
  // After end of this loop node will be at desired prefix
  for (i = 0; i < len; i++) {
    if (node.children[word.charAt(i)] === undefined) return null // No such prefix exists
    node = node.children[word.charAt(i)]
  }
  return node
}

Trie.prototype.remove = function (word, count) {
  if (typeof word !== 'string') return
  if (typeof count !== 'number') count = 1
  else if (count <= 0) return

  // for empty string just delete count of root
  if (word === '') {
    if (this.root.count >= count) this.root.count -= count
    else this.root.count = 0
    return
  }

  let child = this.root
  const len = word.length
  let i, key
  // child: node which is to be deleted
  for (i = 0; i < len; i++) {
    key = word.charAt(i)
    if (child.children[key] === undefined) return
    child = child.children[key]
  }

  // Delete no of occurrences specified
  if (child.count >= count) child.count -= count
  else child.count = 0

  // If some occurrences are left we don't delete it or else
  // if the object forms some other objects prefix we don't delete it
  // For checking an empty object
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (child.count <= 0 && (Object.keys(child.children).length && child.children.constructor === Object)) {
    child.parent.children[child.key] = undefined
  }
}

Trie.prototype.findAllWords = function (prefix) {
  const output = []
  // find the node with provided prefix
  const node = this.findPrefix(prefix)
  // No such prefix exists
  if (node === null) return output
  Trie.findAllWords(node, prefix, output)
  return output
}

Trie.prototype.contains = function (word) {
  // find the node with given prefix
  const node = this.findPrefix(word)
  // No such word exists
  if (node === null || node.count === 0) return false
  return true
}

Trie.prototype.findOccurrences = function (word) {
  // find the node with given prefix
  const node = this.findPrefix(word)
  // No such word exists
  if (node === null) return 0
  return node.count
}

export { Trie }

```



- CC: 12

- Parameters(0)

- An implementation of data structure trie.

- Purpose 

  Trie is a type of k-ary search tree, a tree data structure used for locating specific keys from within a set. 

- Reasons of complexity

  Such data structure needs many loops and branch statements to ensure the correctness of adding, updating and retrieving, which also lead to the high complexity.



### function 5   .\Dynamic-Programming\MaxProductOfThree.js

```js
export function maxProductOfThree (arrayItems) {
  // if size is less than 3, no triplet exists
  const n = arrayItems.length
  if (n < 3) throw new Error('Triplet cannot exist with the given array')
  let max1 = arrayItems[0]
  let max2 = -1
  let max3 = -1
  let min1 = arrayItems[0]
  let min2 = -1
  for (let i = 1; i < n; i++) {
    if (arrayItems[i] > max1) {
      max3 = max2
      max2 = max1
      max1 = arrayItems[i]
    } else if (max2 === -1 || arrayItems[i] > max2) {
      max3 = max2
      max2 = arrayItems[i]
    } else if (max3 === -1 || arrayItems[i] > max3) {
      max3 = arrayItems[i]
    }
    if (arrayItems[i] < min1) {
      min2 = min1
      min1 = arrayItems[i]
    } else if (min2 === -1 || arrayItems[i] < min2) {
      min2 = arrayItems[i]
    }
  }
  const prod1 = max1 * max2 * max3
  const prod2 = max1 * min1 * min2
  return Math.max(prod1, prod2)
}

```



- CC: 11

- Parameters(1)

  * {number[]} arrayItems

- Return

  number

- Purpose

   Given an array of numbers, return the maximum product of 3 numbers from the array

- Reasons of complexity

  Also, there are many conditional statements in one loop, which is unavoidable for finding 3 largest values and 2 smallest values.

### function 6   .\Geometry\ConvexHullGraham.js

```js
function compare (a, b) {
  // Compare Function to Sort the points, a and b are points to compare
  if (a.x < b.x) return -1
  if (a.x === b.x && a.y < b.y) return -1
  return 1
}
function orientation (a, b, c) {
  // Check orientation of Line(a,b) and Line(b,c)
  const alpha = (b.y - a.y) / (b.x - a.x)
  const beta = (c.y - b.y) / (c.x - b.x)

  // Clockwise
  if (alpha > beta) return 1
  // Anticlockwise
  else if (beta > alpha) return -1
  // Colinear
  return 0
}

function convexHull (points) {
  const pointsLen = points.length
  if (pointsLen <= 2) {
    throw new Error('Minimum of 3 points is required to form closed polygon!')
  }

  points.sort(compare)
  const p1 = points[0]; const p2 = points[pointsLen - 1]

  // Divide Hull in two halves
  const upperPoints = []; const lowerPoints = []

  upperPoints.push(p1)
  lowerPoints.push(p1)

  for (let i = 1; i < pointsLen; i++) {
    if (i === pointsLen - 1 || orientation(p1, points[i], p2) !== -1) {
      let upLen = upperPoints.length

      while (upLen >= 2 && orientation(upperPoints[upLen - 2], upperPoints[upLen - 1], points[i]) === -1) {
        upperPoints.pop()
        upLen = upperPoints.length
      }
      upperPoints.push(points[i])
    }
    if (i === pointsLen - 1 || orientation(p1, points[i], p2) !== 1) {
      let lowLen = lowerPoints.length
      while (lowLen >= 2 && orientation(lowerPoints[lowLen - 2], lowerPoints[lowLen - 1], points[i]) === 1) {
        lowerPoints.pop()
        lowLen = lowerPoints.length
      }
      lowerPoints.push(points[i])
    }
  }
  const hull = []
  for (let i = 1; i < upperPoints.length - 1; i++) {
    hull.push(upperPoints[i])
  }
  for (let i = lowerPoints.length - 1; i >= 0; i--) {
    hull.push(lowerPoints[i])
  }

  return hull
}
```



- CC: 13

- Parameters(1)

  * Points(array)

- Return

  Convex hull of points(array)

- Purpose 

  Given a set of points in the plane. The Convex hull of the set is the smallest convex polygon that contains all the points of it.

- Reasons of complexity

  The function implements the Convex Hull algorithm, which needs to find the upper points and lower points of the polygon by calculating orientation of every sequence of three consecutive points. It creates loops and conditional statements and uses 2 auxiliary functions that higher complexity.



### function 7   .\Graphs\PrimMST.js

```js
// Priority Queue Helper functions
function getParentPosition (position) {
  // Get the parent node of the current node
  return Math.floor((position - 1) / 2)
}
function getChildrenPosition (position) {
  // Get the children nodes of the current node
  return [2 * position + 1, 2 * position + 2]
}

class PriorityQueue {
  // Priority Queue class using Minimum Binary Heap
  constructor () {
    this._heap = []
    this.keys = {}
  }

  isEmpty () {
    // Checking if the heap is empty
    return this._heap.length === 0
  }

  push (key, priority) {
    // Adding element to the queue (equivalent to add)
    this._heap.push([key, priority])
    this.keys[key] = this._heap.length - 1
    this._shiftUp(this.keys[key])
  }

  pop () {
    // Removing the element with least priority (equivalent to extractMin)
    this._swap(0, this._heap.length - 1)
    const [key] = this._heap.pop()
    delete this.keys[key]
    this._shiftDown(0)
    return key
  }

  contains (key) {
    // Check if a given key is present in the queue
    return (key in this.keys)
  }

  update (key, priority) {
    // Update the priority of the given element (equivalent to decreaseKey)
    const currPos = this.keys[key]
    this._heap[currPos][1] = priority
    const parentPos = getParentPosition(currPos)
    const currPriority = this._heap[currPos][1]
    let parentPriority = Infinity
    if (parentPos >= 0) {
      parentPriority = this._heap[parentPos][1]
    }
    const [child1Pos, child2Pos] = getChildrenPosition(currPos)
    let [child1Priority, child2Priority] = [Infinity, Infinity]
    if (child1Pos < this._heap.length) {
      child1Priority = this._heap[child1Pos][1]
    }
    if (child2Pos < this._heap.length) {
      child2Priority = this._heap[child2Pos][1]
    }

    if (parentPos >= 0 && parentPriority > currPriority) {
      this._shiftUp(currPos)
    } else if (child2Pos < this._heap.length &&
      (child1Priority < currPriority || child2Priority < currPriority)) {
      this._shiftDown(currPos)
    }
  }

  _shiftUp (position) {
    // Helper function to shift up a node to proper position (equivalent to bubbleUp)
    let currPos = position
    let parentPos = getParentPosition(currPos)
    let currPriority = this._heap[currPos][1]
    let parentPriority = Infinity
    if (parentPos >= 0) {
      parentPriority = this._heap[parentPos][1]
    }

    while (parentPos >= 0 && parentPriority > currPriority) {
      this._swap(currPos, parentPos)
      currPos = parentPos
      parentPos = getParentPosition(currPos)
      currPriority = this._heap[currPos][1]
      try {
        parentPriority = this._heap[parentPos][1]
      } catch (error) {
        parentPriority = Infinity
      }
    }
    this.keys[this._heap[currPos][0]] = currPos
  }

  _shiftDown (position) {
    // Helper function to shift down a node to proper position (equivalent to bubbleDown)
    let currPos = position
    let [child1Pos, child2Pos] = getChildrenPosition(currPos)
    let [child1Priority, child2Priority] = [Infinity, Infinity]
    if (child1Pos < this._heap.length) {
      child1Priority = this._heap[child1Pos][1]
    }
    if (child2Pos < this._heap.length) {
      child2Priority = this._heap[child2Pos][1]
    }
    let currPriority
    try {
      currPriority = this._heap[currPos][1]
    } catch {
      return
    }

    while (child2Pos < this._heap.length &&
      (child1Priority < currPriority || child2Priority < currPriority)) {
      if (child1Priority < currPriority && child1Priority < child2Priority) {
        this._swap(child1Pos, currPos)
        currPos = child1Pos
      } else {
        this._swap(child2Pos, currPos)
        currPos = child2Pos
      }
      [child1Pos, child2Pos] = getChildrenPosition(currPos)
      try {
        [child1Priority, child2Priority] = [this._heap[child1Pos][1], this._heap[child2Pos][1]]
      } catch (error) {
        [child1Priority, child2Priority] = [Infinity, Infinity]
      }

      currPriority = this._heap[currPos][1]
    }
    this.keys[this._heap[currPos][0]] = currPos
    if (child1Pos < this._heap.length && child1Priority < currPriority) {
      this._swap(child1Pos, currPos)
      this.keys[this._heap[child1Pos][0]] = child1Pos
    }
  }

  _swap (position1, position2) {
    // Helper function to swap 2 nodes
    [this._heap[position1], this._heap[position2]] = [this._heap[position2], this._heap[position1]]
    this.keys[this._heap[position1][0]] = position1
    this.keys[this._heap[position2][0]] = position2
  }
}

class GraphWeightedUndirectedAdjacencyList {
  // Weighted Undirected Graph class
  constructor () {
    this.connections = {}
  }

  addNode (node) {
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = {}
  }

  addEdge (node1, node2, weight) {
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections)) { this.addNode(node1) }
    if (!(node2 in this.connections)) { this.addNode(node2) }
    this.connections[node1][node2] = weight
    this.connections[node2][node1] = weight
  }

  PrimMST (start) {
    // Prim's Algorithm to generate a Minimum Spanning Tree (MST) of a graph
    // Details: https://en.wikipedia.org/wiki/Prim%27s_algorithm
    const distance = {}
    const parent = {}
    const priorityQueue = new PriorityQueue()
    // Initialization
    for (const node in this.connections) {
      distance[node] = (node === start.toString() ? 0 : Infinity)
      parent[node] = null
      priorityQueue.push(node, distance[node])
    }
    // Updating 'distance' object
    while (!priorityQueue.isEmpty()) {
      const node = priorityQueue.pop()
      Object.keys(this.connections[node]).forEach(neighbour => {
        if (priorityQueue.contains(neighbour) && distance[node] + this.connections[node][neighbour] < distance[neighbour]) {
          distance[neighbour] = distance[node] + this.connections[node][neighbour]
          parent[neighbour] = node
          priorityQueue.update(neighbour, distance[neighbour])
        }
      })
    }

    // MST Generation from the 'parent' object
    const graph = new GraphWeightedUndirectedAdjacencyList()
    Object.keys(parent).forEach(node => {
      if (node && parent[node]) {
        graph.addEdge(node, parent[node], this.connections[node][parent[node]])
      }
    })
    return graph
  }
}


```



- CC: 12

- Purpose 

  The code implements PrimMST algorithm and creates two classes. One is to implement priority queue, the other is for storing edges  and vertex of the graph. The algorithm is intended to generate the lowest weighted tree from a given graph.

- Reasons of complexity

  The primMST algorithm has to traverse priority queue and check if endpoint of the current edge is in the result graph, thus it has loops and conditional statements to achieve these goals and results in a high complexity.



### function 8   .\Maths\SimpsonIntegration.js

```js
function integralEvaluation (N, a, b, func) {
  // Check if N is an even integer
  let isNEven = true
  if (N % 2 !== 0) isNEven = false

  if (!Number.isInteger(N) || Number.isNaN(a) || Number.isNaN(b)) { throw new TypeError('Expected integer N and finite a, b') }
  if (!isNEven) { throw Error('N is not an even number') }
  if (N <= 0) { throw Error('N has to be >= 2') }

  // Check if a < b
  if (a > b) { throw Error('a must be less or equal than b') }
  if (a === b) return 0

  // Calculate the step h
  const h = (b - a) / N

  // Find interpolation points
  let xi = a // initialize xi = x0
  const pointsArray = []

  // Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
  let temp
  for (let i = 0; i < N + 1; i++) {
    if (i === 0 || i === N) temp = func(xi)
    else if (i % 2 === 0) temp = 2 * func(xi)
    else temp = 4 * func(xi)

    pointsArray.push(temp)
    xi += h
  }

  // Calculate the integral
  let result = h / 3
  temp = 0
  for (let i = 0; i < pointsArray.length; i++) temp += pointsArray[i]

  result *= temp

  if (Number.isNaN(result)) { throw Error("Result is NaN. The input interval doesn't belong to the functions domain") }

  return result
}
```



- CC: 15

- Parameters(4)

  * N: the split number
  * a,b: endpoints of interval
  * func: math function used for integration

- Return

  Integration result

- Purpose 

  Calculate Integration by implementing Simpson Integration method.

- Reasons of complexity

  It adds many conditional statements for validity of this function in the beginning, which increases CC of the code.



### function 9  .\Sorts\FlashSort.js

```js
export function flashSort (arr) {
  let max = 0; let min = arr[0]
  const n = arr.length
  const m = ~~(0.45 * n)
  const l = new Array(m)

  for (let i = 1; i < n; ++i) {
    if (arr[i] < min) {
      min = arr[i]
    }
    if (arr[i] > arr[max]) {
      max = i
    }
  }

  if (min === arr[max]) {
    return arr
  }

  const c1 = (m - 1) / (arr[max] - min)

  for (let k = 0; k < m; k++) {
    l[k] = 0
  }

  for (let j = 0; j < n; ++j) {
    const k = ~~(c1 * (arr[j] - min))
    ++l[k]
  }

  for (let p = 1; p < m; ++p) {
    l[p] = l[p] + l[p - 1]
  }

  let hold = arr[max]
  arr[max] = arr[0]
  arr[0] = hold

  // permutation
  let move = 0; let t; let flash
  let j = 0
  let k = m - 1

  while (move < (n - 1)) {
    while (j > (l[k] - 1)) {
      ++j
      k = ~~(c1 * (arr[j] - min))
    }
    if (k < 0) break
    flash = arr[j]
    while (j !== l[k]) {
      k = ~~(c1 * (flash - min))
      hold = arr[t = --l[k]]
      arr[t] = flash
      flash = hold
      ++move
    }
  }

  // insertion
  for (j = 1; j < n; j++) {
    hold = arr[j]
    let i = j - 1
    while (i >= 0 && arr[i] > hold) {
      arr[i + 1] = arr[i--]
    }
    arr[i + 1] = hold
  }
  return arr
}
```



- CC: 15

- Parameters(1)

  * arr

- Return

  arr(after sorting)

- Purpose 

  Sort the array by flash sort algorithm.

- Reasons of complexity

  The function has many loops because there are corresponding steps in the algorithm, so it affects CC.



### function 10   .\String\ScrambleStrings.js

```js
const isScramble = (s1, s2) => {
  return helper({}, s1, s2)
}

const helper = function (dp, s1, s2) {
  const map = {}

  if (dp[s1 + s2] !== undefined) return dp[s1 + s2]
  if (s1 === s2) return true

  for (let j = 0; j < s1.length; j++) {
    if (map[s1[j]] === undefined) map[s1[j]] = 0
    if (map[s2[j]] === undefined) map[s2[j]] = 0
    map[s1[j]]++
    map[s2[j]]--
  }

  for (const key in map) {
    if (map[key] !== 0) {
      dp[s1 + s2] = false
      return false
    }
  }

  for (let i = 1; i < s1.length; i++) {
    if (
      (helper(dp, s1.substr(0, i), s2.substr(0, i)) &&
        helper(dp, s1.substr(i), s2.substr(i))) ||
      (helper(dp, s1.substr(0, i), s2.substr(s2.length - i)) &&
        helper(dp, s1.substr(i), s2.substr(0, s2.length - i)))
    ) {
      dp[s1 + s2] = true
      return true
    }
  }

  dp[s1 + s2] = false
  return false
}
```



- CC: 13

- Parameters(2)

  * s1
  * s2

- Return

  if s2 is a scrambled string of s1

- Purpose 

  Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false. This code is for a problem on leetcode(87. Scramble String).

- Reasons of complexity

  The function uses three loops and many conditional statements, for dp and also recursion. It makes the function has a high CC.
