import { bufferToBase64 } from '../ArrayBufferToBase64'
import { TextEncoder } from 'util'

describe('ArrayBufferToBase64', () => {
  it('should encode "Hello, world!" as "SGVsbG8sIHdvcmxkIQ=="', () => {
    const testString = 'Hello, world!'
    const encoder = new TextEncoder()
    const helloWorldBuffer = encoder.encode(testString)
    const result = bufferToBase64(helloWorldBuffer)
    expect(result).toBe('SGVsbG8sIHdvcmxkIQ==')
  })

  it('should encode binary buffer [55,23,177,234,68,26,90] as "Nxex6kQaWg=="', () => {
    const testBuffer = new Uint8Array([55, 23, 177, 234, 68, 26, 90])
    const result = bufferToBase64(testBuffer)
    expect(result).toBe('Nxex6kQaWg==')
  })

  it('should encode binary buffer [0,1,2,3,4,5,6,7,8,9] as "AAECAwQFBgcICQ=="', () => {
    const testBuffer = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    const result = bufferToBase64(testBuffer)
    expect(result).toBe('AAECAwQFBgcICQ==')
  })
})
