import { HuffmanCoder } from '../HuffmanHeap'

describe('HuffmanCoder', () => {
  it('should encode and decode a simple string', () => {
    const data = 'hello world'
    const coder = new HuffmanCoder(data)
    const encodedString = coder.encode(data)
    const decodedString = coder.decode(encodedString)
    expect(decodedString).toEqual(data)
  })

  it('should encode and decode a string with repeating characters', () => {
    const data = 'aaaaabbbbcccdeeeee'
    const coder = new HuffmanCoder(data)
    const encodedString = coder.encode(data)
    const decodedString = coder.decode(encodedString)
    expect(decodedString).toEqual(data)
  })
})
