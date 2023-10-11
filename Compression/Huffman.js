/**
 * Huffman Coding is a lossless data compression algorithm that uses variable-length codes to represent characters.
 *
 * The algorithm works by assigning shorter codes to characters that occur more frequently. This results in a compressed representation of the data.
 *
 * Huffman Coding is widely used in a variety of applications, including file compression, data transmission, and image processing.
 *
 * More information on Huffman Coding can be found here: https://en.wikipedia.org/wiki/Huffman_coding
 */

/**
 * Builds a frequency table from a string.
 * @example
 * buildFrequencyTable('this is an example for huffman encoding')
 * returns { ' ': 6, a: 2, c: 1, d: 1, e: 4, f: 3, g: 1, h: 2, i: 3, l: 1, m: 1, n: 4, o: 1, p: 1, r: 1, s: 2, t: 2, u: 1, x: 1 }
 * @param {string} data - The string to build the frequency table from.
 * @returns {Object} - The frequency table.
 */
function buildFrequencyTable(data) {
  const freqTable = {}

  for (const char of data) {
    freqTable[char] = (freqTable[char] || 0) + 1
  }

  return freqTable
}

/**
 * A Huffman Node is a node in a Huffman tree.
 * @class HuffmanNode
 * @property {string} char - The character represented by the node.
 * @property {number} freq - The frequency of the character.
 * @property {HuffmanNode} left - The left child of the node.
 * @property {HuffmanNode} right - The right child of the node.
 */
class HuffmanNode {
  constructor(char, freq) {
    this.char = char
    this.freq = freq
    this.left = null
    this.right = null
  }
}

/**
 * Builds a Huffman tree from a frequency table.
 * @param {Object} freqTable - The frequency table to use for building the tree.
 * @returns {HuffmanNode} - The root node of the Huffman tree.
 */
function buildHuffmanTree(freqTable) {
  const nodes = Object.keys(freqTable).map(
    (char) => new HuffmanNode(char, freqTable[char])
  )

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq)
    const left = nodes.shift()
    const right = nodes.shift()
    const parent = new HuffmanNode(null, left.freq + right.freq)
    parent.left = left
    parent.right = right
    nodes.push(parent)
  }

  return nodes[0]
}

/**
 * Builds a Huffman code table from a Huffman tree.
 * @param {HuffmanNode} root - The root node of the Huffman tree.
 * @param {string} [prefix=''] - The prefix to use for the Huffman codes.
 * @param {Object} [codes={}] - The Huffman code table.
 * @returns {Object} - The Huffman code table.
 */
function buildHuffmanCodes(root, prefix = '', codes = {}) {
  if (root) {
    if (root.char) {
      codes[root.char] = prefix
    }
    buildHuffmanCodes(root.left, prefix + '0', codes)
    buildHuffmanCodes(root.right, prefix + '1', codes)
  }
  return codes
}

/**
 * Encodes a string using Huffman Coding.
 * @param {string} data - The string to encode.
 * @param {Object} freqTable - The frequency table to use for encoding.
 * @returns {string} - The encoded string.
 */
function encodeHuffman(data, freqTable) {
  const root = buildHuffmanTree(freqTable)
  const codes = buildHuffmanCodes(root)

  let encodedData = ''
  for (let char of data) {
    encodedData += codes[char]
  }

  return encodedData
}

/**
 * Decodes a string using Huffman Coding.
 * @param {string} encodedData - The string to decode.
 * @param {HuffmanNode} root - The root node of the Huffman tree.
 * @returns {string} - The decoded string.
 */
function decodeHuffman(encodedData, root) {
  let decodedData = ''
  let currentNode = root
  for (let bit of encodedData) {
    if (bit === '0') {
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }

    if (currentNode.char) {
      decodedData += currentNode.char
      currentNode = root
    }
  }

  return decodedData
}

// Example usage
const data = 'this is an example for huffman encoding'
const freqTable = buildFrequencyTable(data)
const root = buildHuffmanTree(freqTable)
const encodedData = encodeHuffman(data, freqTable)
console.log('Encoded Data:', encodedData)

const decodedData = decodeHuffman(encodedData, root)
console.log('Decoded Data:', decodedData)

export {
  buildHuffmanCodes,
  buildHuffmanTree,
  encodeHuffman,
  decodeHuffman,
  buildFrequencyTable
}
