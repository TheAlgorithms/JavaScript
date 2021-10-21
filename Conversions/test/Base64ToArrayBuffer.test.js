import { base64ToBuffer } from '../Base64ToArrayBuffer'
import { TextDecoder } from 'util'

describe('Base64ToArrayBuffer', () => {
  it('should decode "SGVsbG8sIHdvcmxkIQ==" as "Hello, world!"', () => {
    const testBase64String = 'SGVsbG8sIHdvcmxkIQ=='
    const buffer = base64ToBuffer(testBase64String)
    const decoder = new TextDecoder()
    const helloWorldString = decoder.decode(buffer)
    expect(helloWorldString).toBe('Hello, world!')
  })

  it('should decode base64 "Nxex6kQaWg==" as binary buffer [55,23,177,234,68,26,90]', () => {
    const testBase64String = 'Nxex6kQaWg=='
    const buffer = base64ToBuffer(testBase64String)
    const array = [...new Uint8Array(buffer)]
    expect(array).toEqual([55, 23, 177, 234, 68, 26, 90])
  })

  it('should decode base64 "AAECAwQFBgcICQ==" as binary buffer [0,1,2,3,4,5,6,7,8,9]', () => {
    const testBase64String = 'AAECAwQFBgcICQ=='
    const buffer = base64ToBuffer(testBase64String)
    const array = [...new Uint8Array(buffer)]
    expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
