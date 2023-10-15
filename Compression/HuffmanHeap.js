import {
  BinaryHeap,
  minHeapComparator
} from '../Data-Structures/Heap/BinaryHeap'
class Node {
  constructor(symbol, frequency, left = null, right = null) {
    this.symbol = symbol
    this.frequency = frequency
    this.left = left
    this.right = right
  }
}

class HuffmanCoder {
  constructor(data) {
    this.data = data
    this.codes = {}
    this.buildHuffmanTree()
    this.generateCodes(this.huffmanTree, '')
  }

  buildFrequencyTable() {
    const frequencyTable = {}
    for (const char of this.data) {
      if (char in frequencyTable) {
        frequencyTable[char]++
      } else {
        frequencyTable[char] = 1
      }
    }
    return frequencyTable
  }

  buildHuffmanTree() {
    const frequencyTable = this.buildFrequencyTable()
    const minHeap = new BinaryHeap(minHeapComparator)

    for (const symbol in frequencyTable) {
      minHeap.insert(new Node(symbol, frequencyTable[symbol]))
    }

    while (minHeap.size() > 1) {
      const left = minHeap.extractTop()
      const right = minHeap.extractTop()
      const combined = new Node(
        null,
        left.frequency + right.frequency,
        left,
        right
      )
      minHeap.insert(combined)
    }

    this.huffmanTree = minHeap.extractTop()
  }

  generateCodes(node, code) {
    if (!node) return

    if (node.symbol) {
      this.codes[node.symbol] = code
    } else {
      this.generateCodes(node.left, code + '0')
      this.generateCodes(node.right, code + '1')
    }
  }

  encode(data) {
    let encodedString = ''
    for (const char of data) {
      encodedString += this.codes[char]
    }
    return encodedString
  }

  decode(encodedString) {
    let decodedString = ''
    let currentNode = this.huffmanTree

    for (const bit of encodedString) {
      if (bit === '0') {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }

      if (currentNode.symbol) {
        decodedString += currentNode.symbol
        currentNode = this.huffmanTree
      }
    }

    return decodedString
  }
}

export { HuffmanCoder }
