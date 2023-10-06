import { checkMirrorString } from '../CheckMirrorString'

describe('checkMirrorString', () => {
  it('CheckMirrorString -> ', () => {
    const word = 'HOAMMAOH'
    const res = checkMirrorString(word)
    expect(res).toBe('Is a mirror string')
  })

  it('check for npn mirror string -> ', () => {
    const word = 'JAVASCRIPT'
    const res = checkMirrorString(word)
    expect(res).toBe('Not a mirror string')
  })

  it('string with numeric value -> ', () => {
    const word = 'Kop12Po'
    const res = checkMirrorString(word)
    expect(res).toBe('String should only contains alphabet')
  })

  it('number as a string -> ', () => {
    const word = 1234
    const res = checkMirrorString(word)
    expect(res).toBe('Not a string')
  })
})
