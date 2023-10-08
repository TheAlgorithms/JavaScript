import { checkExceeding } from '../CheckExceeding'

describe('Testing CheckExceeding function', () => {
  it('Testing the invalid types', () => {
    expect(() => checkExceeding(Math.random())).toThrow(
      'Argument is not a string'
    )
    expect(() => checkExceeding(null)).toThrow('Argument is not a string')
    expect(() => checkExceeding(false)).toThrow('Argument is not a string')
    expect(() => checkExceeding(false)).toThrow('Argument is not a string')
  })

  it('Testing with empty string', () => {
    expect(checkExceeding('')).toBe(true)
  })

  it('Testing with linear alphabets', () => {
    expect(checkExceeding('a b c d e ')).toBe(true)
    expect(checkExceeding('f g h i j ')).toBe(true)
    expect(checkExceeding('k l m n o ')).toBe(true)
    expect(checkExceeding('p q r s t ')).toBe(true)
    expect(checkExceeding('u v w x y z')).toBe(true)
  })

  it('Testing not exceeding words', () => {
    expect(checkExceeding('Hello')).toBe(false)
    expect(checkExceeding('world')).toBe(false)
    expect(checkExceeding('update')).toBe(false)
    expect(checkExceeding('university')).toBe(false)
    expect(checkExceeding('dog')).toBe(false)
    expect(checkExceeding('exceeding')).toBe(false)
    expect(checkExceeding('resolved')).toBe(false)
    expect(checkExceeding('future')).toBe(false)
    expect(checkExceeding('fixed')).toBe(false)
    expect(checkExceeding('codes')).toBe(false)
    expect(checkExceeding('facebook')).toBe(false)
    expect(checkExceeding('vscode')).toBe(false)
  })

  it('Testing exceeding words', () => {
    expect(checkExceeding('bee')).toBe(true) // [ 3 ]
    expect(checkExceeding('can')).toBe(true) // [ 2, 13 ]
    expect(checkExceeding('good')).toBe(true) //  [ 8, 11 ]
    expect(checkExceeding('bad')).toBe(true) // [ 1, 3 ]
    expect(checkExceeding('play')).toBe(true) // [ 4, 11, 24 ]
    expect(checkExceeding('delete')).toBe(true) // [1, 7, 7, 15, 15]
  })
})
