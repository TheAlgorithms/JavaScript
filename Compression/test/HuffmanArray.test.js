import {
  buildHuffmanCodes,
  buildHuffmanTree,
  encodeHuffman,
  decodeHuffman,
  buildFrequencyTable
} from '../HuffmanArray'

describe('Huffman Coding', () => {
  let data, freqTable, root

  beforeEach(() => {
    data = 'this is an example for huffman encoding'
    freqTable = buildFrequencyTable(data)
    root = buildHuffmanTree(freqTable)
  })

  it('should encode and decode a string correctly', () => {
    const encodedData = encodeHuffman(data, freqTable)
    const decodedData = decodeHuffman(encodedData, root)

    expect(decodedData).toEqual(data)
  })

  it('should build Huffman codes correctly', () => {
    const codes = buildHuffmanCodes(root)

    console.log(codes['t'])
    console.log(codes['h'])
    console.log(codes['i'])
    console.log(codes['s'])

    expect(codes['t']).toEqual('01101')
    expect(codes['h']).toEqual('0111')
    expect(codes['i']).toEqual('0100')
    expect(codes['s']).toEqual('1010')
  })
})
